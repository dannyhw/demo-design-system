import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { colors, spacing, radius } from './theme';

export interface Member {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  isOrganizer?: boolean;
}

export interface MemberCardProps {
  member: Member;
  onPress?: () => void;
  onRemove?: () => void;
}

export const MemberCard = ({ member, onPress, onRemove }: MemberCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.7 : 1}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.container}>
        <Avatar
          name={member.name}
          source={member.avatar ? { uri: member.avatar } : undefined}
          size="lg"
        />
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <Text variant="body" weight="medium" style={styles.name}>
              {member.name}
            </Text>
            {member.isOrganizer && (
              <Badge variant="accent" size="sm" label="Organizer" />
            )}
          </View>
          {member.role && (
            <Text variant="bodySmall" color="secondary">
              {member.role}
            </Text>
          )}
        </View>
        {onRemove && (
          <TouchableOpacity
            onPress={onRemove}
            style={styles.removeButton}
            accessibilityLabel="Remove member"
          >
            <Text style={styles.removeIcon}>×</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  content: {
    flex: 1,
    marginLeft: spacing.md,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  name: {
    color: colors.foreground,
  },
  removeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    backgroundColor: colors.backgroundTertiary,
  },
  removeIcon: {
    fontSize: 20,
    color: colors.foregroundSecondary,
  },
});
