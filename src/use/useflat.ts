export const currentFlat = () => {
  const takeColorStatus = (flatStatus: string): string => {
    return flatStatus.includes("юр")
      ? "red"
      : flatStatus.includes("физ")
      ? "blue"
      : flatStatus.includes("Забронировано")
      ? "grey"
      : flatStatus.includes("Продано")
      ? "disable"
      : "";
  };
	const takeType = (flatType: string): string => {
		console.log('flatType',flatType);
    return flatType.includes("Кваритира")
      ? "apartment"
      : flatType.includes("Паркинг")
      ? "parking"
      :  "";
  };

  return { takeColorStatus, takeType };
};
