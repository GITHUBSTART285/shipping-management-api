export const getShipmentTypesService = async () => {
  return [
    {
      id: "domestic",
      name: "Domestic",
    },
    {
      id: "hyperlocal",
      name: "Hyperlocal",
    },
    {
      id: "cross-border",
      name: "Cross-border",
    },
  ];
};