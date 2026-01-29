import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Text";
import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { colors, spacing, radius } from "./theme";
import { SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS } from "rn-icon-mapper";

export interface Event {
  id: string;
  title: string;
  description?: string;
  date: Date;
  location: string;
  attendees?: { name: string; avatar?: string }[];
  maxAttendees?: number;
  isOnline?: boolean;
}

export interface EventCardProps {
  event: Event;
  onPress?: () => void;
  onRSVP?: () => void;
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const EventCard = ({ event, onPress, onRSVP }: EventCardProps) => {
  const attendeeCount = event.attendees?.length ?? 0;
  const spotsLeft = event.maxAttendees
    ? event.maxAttendees - attendeeCount
    : undefined;

  return (
    <Card variant="default" padding="none" onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Text variant="h2" color="primary" style={styles.dateDay}>
            {event.date.getDate()}
          </Text>
          <Text variant="caption" color="secondary" style={styles.dateMonth}>
            {event.date
              .toLocaleDateString("en-US", { month: "short" })
              .toUpperCase()}
          </Text>
        </View>
        <View style={styles.headerContent}>
          <Text variant="h3" weight="semibold" numberOfLines={2}>
            {event.title}
          </Text>
          <View style={styles.meta}>
            <Text variant="bodySmall" color="secondary">
              {formatDate(event.date)} · {formatTime(event.date)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        {event.description && (
          <Text
            variant="bodySmall"
            color="secondary"
            numberOfLines={2}
            style={styles.description}
          >
            {event.description}
          </Text>
        )}

        <View style={styles.locationRow}>
          <MaterialCommunityIcons
            name={
              (event.isOnline
                ? SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS["globe"] || "web"
                : SF_SYMBOLS_TO_MATERIAL_COMMUNITY_ICONS["mappin"] ||
                  "map-marker-outline") as any
            }
            size={14}
            color={colors.foregroundSecondary}
            style={styles.locationIcon}
          />
          <Text variant="bodySmall" color="secondary" numberOfLines={1}>
            {event.location}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.attendeesSection}>
          {event.attendees && event.attendees.length > 0 && (
            <View style={styles.avatarStack}>
              {event.attendees.slice(0, 3).map((attendee, index) => (
                <View
                  key={index}
                  style={[styles.avatarWrapper, { zIndex: 3 - index }]}
                >
                  <Avatar
                    size="sm"
                    name={attendee.name}
                    source={
                      attendee.avatar ? { uri: attendee.avatar } : undefined
                    }
                    showBorder
                  />
                </View>
              ))}
            </View>
          )}
          <Text variant="caption" color="secondary">
            {attendeeCount} attending
            {spotsLeft !== undefined &&
              spotsLeft > 0 &&
              ` · ${spotsLeft} spots left`}
          </Text>
        </View>

        {onRSVP && (
          <TouchableOpacity
            style={styles.rsvpButton}
            onPress={onRSVP}
            activeOpacity={0.8}
          >
            <Text style={styles.rsvpText}>RSVP</Text>
          </TouchableOpacity>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },
  dateContainer: {
    width: 48,
    alignItems: "center",
    marginRight: spacing.md,
  },
  dateDay: {
    lineHeight: 32,
  },
  dateMonth: {
    letterSpacing: 1,
  },
  headerContent: {
    flex: 1,
  },
  meta: {
    marginTop: spacing.xs,
  },
  body: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  description: {
    marginBottom: spacing.sm,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    marginRight: spacing.sm,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  attendeesSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarStack: {
    flexDirection: "row",
    marginRight: spacing.sm,
  },
  avatarWrapper: {
    marginLeft: -8,
  },
  rsvpButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  rsvpText: {
    color: colors.black,
    fontSize: 13,
    fontWeight: "600",
  },
});
