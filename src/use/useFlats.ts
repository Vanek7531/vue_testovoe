import { computed, ref, type Ref } from "vue";

export const allFlats = () => {
  let flatsList = ref([
    {
      id: 1,
      type: "Кваритира",
      price: "7 733 300 руб.",
      status: "Уступка от юр. лица",
      districtName: "Чистое Небо",
      districtAdress: "корпус 10, III кв. 2022 г.",
      apartanament: "кв. 62",
      room: "1 комн. кв.",
      space: "234.38 м²",
      floor: "7 этаж",
      addDate: "21/11/2020",
      adress:
        "Лен. область, Всеволожский район, д. Кудрово, ул. Столичная, д. 5, к. 1",
    },
    {
      id: 2,
      type: "",
      price: "7 733 300 руб.",
      status: "Уступка от физ. лица",
      districtName: "Зеленый квартал на Пулковских высотах",
      districtAdress: "корпус 11, III кв. 2022 г.",
      apartanament: "кв. 62",
      room: "1 комн. кв.",
      space: "234.38 м²",
      floor: "7 этаж",
      addDate: "21/11/2020",
      adress: "Комендантский пр., уч. 1 Каменка",
    },
    {
      id: 3,
      type: "Паркинг",
      price: "800 300 руб.",
      status: "Продано",
      districtName: "Зеленый квартал на Пулковских высотах",
      districtAdress: "корпус 10, III кв. 2022 г.",
      apartanament: "№ 7-10-2 (ПИБ №68)",
      space: "15 м²",
      addDate: "21/11/2020",
      adress: "Комендантский пр., уч. 1 Каменка",
    },
    {
      id: 4,
      type: "Паркинг",
      price: "800 300 руб.",
      status: "Забронировано",
      districtName: "Зеленый квартал на Пулковских высотах",
      districtAdress: "корпус 10, III кв. 2022 г.",
      apartanament: "№ 7-10-2 (ПИБ №68)",
      space: "15 м²",
      addDate: "21/11/2020",
      adress: "Комендантский пр., уч. 1 Каменка",
    },
  ]);

  const search = ref("");

  const isSearch = (value: any): boolean => {
    const searchText = search.value.toLowerCase();
    return (
      value.apartanament.toString().toLowerCase().indexOf(searchText) !== -1 ||
      value.districtAdress.toString().toLowerCase().indexOf(searchText) !==
        -1 ||
      value.districtName.toString().toLowerCase().indexOf(searchText) !== -1
    );
  };

  let callback: Ref<boolean> = ref(false);

  const flats = computed(() => {
    let t = flatsList.value;
    if (search.value.length > 0) {
      console.log("??");
      t = flatsList.value.filter((el) => isSearch(el));
    }
    if (	callback.value === true){
    	console.log('callback',);
    	t = flats.value.filter((el:any) => !selectFlats.value.includes(el.id))
    	selectFlats.value = []
    	callback.value = false
    }

    return t;
  });
  const selAll = () => {
    console.log("selAll");
    if (selectFlats.value.length === 0) {
      flats.value.map((el) => {
        selectFlats.value.push(el.id);
      });
    } else selectFlats.value.length = 0;
  };

  const selectFlats = ref([]);

  const delSel = (): any => {
    if (selectFlats.value.length > 0) {
      console.log("1");
      callback.value = true;
      // return flats.value.filter((el:any) => !selectFlats.value.includes(el.id))
    }
  };

  return { flats, flatsList, selectFlats, delSel, search, callback, selAll };
};
