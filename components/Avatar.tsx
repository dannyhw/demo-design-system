import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';
import { Text } from './Text';
import { colors } from './theme';

export interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  source?: ImageSourcePropType;
  name?: string;
  showBorder?: boolean;
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const getColorFromName = (name: string): string => {
  const colorPalette = [
    '#0070f3',
    '#7928ca',
    '#ff0080',
    '#f5a623',
    '#50e3c2',
    '#0070f3',
    '#79ffe1',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorPalette[Math.abs(hash) % colorPalette.length];
};

export const Avatar = ({
  size = 'md',
  source,
  name = '',
  showBorder = false,
}: AvatarProps) => {
  const sizeValue = sizeMap[size];
  const fontSize = fontSizeMap[size];

  if (source) {
    return (
      <View
        style={[
          styles.container,
          { width: sizeValue, height: sizeValue, borderRadius: sizeValue / 2 },
          showBorder && styles.border,
        ]}
      >
        <Image
          source={source}
          style={[
            styles.image,
            { width: sizeValue, height: sizeValue, borderRadius: sizeValue / 2 },
          ]}
        />
      </View>
    );
  }

  const backgroundColor = getColorFromName(name);

  return (
    <View
      style={[
        styles.container,
        styles.placeholder,
        { width: sizeValue, height: sizeValue, borderRadius: sizeValue / 2, backgroundColor },
        showBorder && styles.border,
      ]}
    >
      <Text style={[styles.initials, { fontSize }]}>{getInitials(name)}</Text>
    </View>
  );
};

const sizeMap = {
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64,
};

const fontSizeMap = {
  sm: 10,
  md: 13,
  lg: 16,
  xl: 22,
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  border: {
    borderWidth: 2,
    borderColor: colors.background,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: colors.white,
    fontWeight: '600',
  },
});
