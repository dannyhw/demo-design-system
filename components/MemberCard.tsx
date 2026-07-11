import { StyleSheet, View } from 'react-native';
import { Text } from './Text';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';
import { spacing } from './theme';

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
    <Card padding="none" onPress={onPress}>
      <View style={styles.container}>
        <Avatar
          name={member.name}
          source={member.avatar ? { uri: member.avatar } : undefined}
          size="lg"
        />
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <Text variant="body" weight="medium">
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
          <Button
            variant="ghost"
            size="sm"
            label="×"
            onPress={onRemove}
          />
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
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
});
