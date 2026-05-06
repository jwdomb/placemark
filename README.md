# Placemark

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplacemark%2Fplacemark&env=VITE_PUBLIC_GEOCODE_EARTH_TOKEN)

Placemark is an open source and free application for creating, viewing,
editing, and analyzing map data. Most people who want to use this application
should visit [Placemark.io](https://www.placemark.io/), the main instance.
The rest of this README is for people who want to tinker with it as a developer,
fork it, etc.

## Getting started

There are more sophisticated approaches using Docker or Render (see files), but
the following simple approach works locally on macOS:

1. Clone the repository, change to this directory, and install dependencies.

This repository expects you to use [pnpm](https://pnpm.io/) and Node 24.5.0,
which can be installed using [mise](https://mise.jdx.dev/) or manually.

```
git clone
pnpm install
```

2. Obtain a [Geocode Earth token](https://app.geocode.earth/keys)
   ([docs](https://geocode.earth/docs/intro/authentication/)).

   Map tiles use OpenStreetMap, NAIP satellite imagery, and CartoDB basemaps.
   No Mapbox token is required for map tiles.

   A Mapbox token is only needed if you use the routing feature (Mapbox Directions API).

3. Configure the package with the token from the previous step:

```sh
VITE_PUBLIC_GEOCODE_EARTH_TOKEN="<your Geocode Earth token>" \
```

4. Start the server:

Either in development mode with hot-reloading:

```sh
pnpm dev
```

Or build a `dist/` directory that you can serve as normal files:

```sh
pnpm build
pnpm dlx serve@latest dist
```

For local development, copy `.env.example` to `.env.local` and add your tokens there:
```sh
cp .env.example .env.local
```

## Interesting forks

- [epanetjs](https://epanetjs.com/) - focused on water modeling ([repo](https://github.com/epanet-js/epanet-js))
- [geojson.io/next](https://geojson.io/next/) from Mapbox ([repo](https://github.com/mapbox/geojson.io))
