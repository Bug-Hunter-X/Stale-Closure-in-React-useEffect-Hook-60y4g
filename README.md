# Stale Closure in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: using an empty dependency array `[]` when the effect should re-run based on external data changes.

## Problem

The `MyComponent` fetches data from an API. However, the `useEffect` hook has an empty dependency array, causing it to run only once on mount. If the API data changes later, the component won't update.

## Solution

The solution involves correctly specifying the dependencies in the array to ensure the effect re-runs when necessary. In this case, there are no dependencies that trigger a re-run, so we need a different approach, perhaps using a state variable to manage the data fetching. 