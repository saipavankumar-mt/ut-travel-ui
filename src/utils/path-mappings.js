export const homePageViewAll = {
  piligrimDestination: {
    routeName: 'tour-packages',
    tabIndex: 0,
  },
  beautifulUttranchal: {
    routeName: 'tour-packages',
    tabIndex: 1,
  },
  adventurePackages: {
    routeName: 'tour-packages',
    tabIndex: 2,
  },
  trekkingPackages: {
    routeName: 'trekking',
    tabIndex: 1,
  },
  hillStationGetaways: {
    routeName: 'destinations',
    tabIndex: 0,
  }
}

export const homePageViewTile = (value, categoryKey) => {
  switch (categoryKey) {
    case 'hillStationGetaways':
      return {
        routeName: 'destination-detail',
        routeParams: { destinationName: value.key, destinationId: value.id },
      };
    case 'trekkingPackages':
      return {
        routeName: 'trekking-detail',
        routeParams: { trekkingName: value.key, trekkingId: value.id },
      };
    default:
      return {
        routeName: 'detail',
        routeParams: { packageName: value.key, packageId: value.id },
      };
  }
}
