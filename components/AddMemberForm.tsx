import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Input } from './Input';
import { Button } from './Button';
import { Text } from './Text';
import { Card } from './Card';
import { spacing } from './theme';

export interface AddMemberFormData {
  name: string;
  role: string;
  isOrganizer: boolean;
}

export interface AddMemberFormProps {
  onSubmit: (data: AddMemberFormData) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export const AddMemberForm = ({
  onSubmit,
  onCancel,
  isLoading = false,
}: AddMemberFormProps) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState<{ name?: string; role?: string }>({});

  const validate = (): boolean => {
    const newErrors: { name?: string; role?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!role.trim()) {
      newErrors.role = 'Role is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit({
        name: name.trim(),
        role: role.trim(),
        isOrganizer: false,
      });
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      keyboardDismissMode="interactive"
    >
      <Card variant="default" padding="lg">
        <Text variant="h2" style={styles.title}>
          Add Member
        </Text>
        <Text variant="body" color="secondary" style={styles.subtitle}>
          Add a new member to the React Native Porto community.
        </Text>

        <View style={styles.form}>
          <Input
            label="Full Name"
            placeholder="João Silva"
            value={name}
            onChangeText={setName}
            error={errors.name}
            autoCapitalize="words"
          />

          <Input
            label="Role"
            placeholder="React Native Developer"
            value={role}
            onChangeText={setRole}
            error={errors.role}
          />
        </View>

        <View style={styles.actions}>
          {onCancel && (
            <Button
              variant="ghost"
              label="Cancel"
              onPress={onCancel}
              disabled={isLoading}
            />
          )}
          <Button
            variant="primary"
            label={isLoading ? 'Adding...' : 'Add Member'}
            onPress={handleSubmit}
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.md,
  },
});
