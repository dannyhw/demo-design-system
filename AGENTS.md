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

### Running Storybook on the device apps

Storybook uses the existing iOS and Android development apps. To switch the
running apps to the Storybook bundle:

1. Stop every currently running Metro/Expo server for this project, including
   servers started by `expo run:ios` or `expo run:android`.
2. Run `bun storybook`.
3. Refresh the iOS and Android apps so they load the updated Storybook bundle.

There must be exactly one Metro server, on port `8081`. Before testing, verify
that its Expo process has `STORYBOOK_ENABLED=true`. Do not leave another Metro
server on a different port, because a device can remain attached to the stale
app bundle.

`metro.config.js` selects the Storybook bundle from `STORYBOOK_ENABLED=true`.
Never change `package.json`'s `main` field, the app entrypoint, or add an app
route to enable Storybook. No alternate entrypoint or separate Storybook host
is required.

For automated capture, use the Storybook channel server on port `7007`:

- `GET /index.json` lists the available stories and their IDs.
- `POST /select-story-sync/<story-id>` selects a story and waits for it to
  render on connected devices.
- The experimental `/mcp` endpoint can also list documentation and select a
  story.

Select stories through these APIs and take screenshots from the refreshed
device apps; do not add temporary capture screens to the application.

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
