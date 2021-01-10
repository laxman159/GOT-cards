export default function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      //console.log("voy a actualizar la lista de paises");
      return { ...state, countryList: action.payload };
    }

    case "SET_COUNTRY_BY_NAME": {
      let list;

      list = state.countryList;
      console.log(list);

      const countryListByName = list.filter((country) => country.characterName);
      console.log(countryListByName.characterName);
      return { ...state, countryListByName };
    }

    default: {
      return state;
    }
  }
}
