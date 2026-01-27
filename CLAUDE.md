# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React Native design system for the "React Native Porto" meetup group app. Built with Expo SDK 54 and Storybook 10 for component development. Uses a dark, minimalist visual style.

## Commands

This project uses **bun** as the package manager.

```bash
# Start Expo dev server (includes Storybook)
bun start

# Platform-specific
bun run ios
bun run android
bun run web

# Regenerate Storybook story index after adding/removing stories
bun run storybook-generate
```

## Architecture

### Design System (`components/`)

**Theme** (`theme.ts`): Design tokens for colors, spacing, radius, typography, and shadows. All components import from here.

**Base Components**: `Text`, `Button`, `Input`, `Card`, `Avatar`, `Badge`, `Divider`, `IconButton`

**Domain Components**: `MemberCard`, `EventCard`, `EmptyState`, `AppHeader`, `SectionHeader` - specific to the meetup app use case.

All components are exported from `components/index.ts`.

### Storybook

- Config in `.rnstorybook/`
- Stories co-located with components: `Component.stories.tsx`
- Uses `satisfies Meta<typeof Component>` pattern for type safety
- Stories organized under "Design System/" and "React Native Porto/" categories

### App Entry

- `index.ts` registers the app via Expo
- `App.tsx` renders Storybook UI (via `.rnstorybook`)
