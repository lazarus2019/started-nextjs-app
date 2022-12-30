import { projectReducer } from './../features/project/reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const combinedReducer = combineReducers({
  project: projectReducer,
});

// export const makeStore = () => {
//   configureStore({
//     reducers: combinedReducer,
//   });
// };

// const combinedReducer = combineReducers({
//   translate: translateReducer,
//   history: historyReducer,
//   filesManager: filesManagerReducer,
//   settingProject: settingProjectReducer,
//   defaultGlossary: defaultGlossaryReducer,
//   dictionaryManagement: dictionaryManagementReducer,
//   settingEnvironment: settingEnvironmentReducer,
//   settingRole: settingRoleReducer,
//   settingUserRole: settingUserRoleReducer,
//   settingLanguageReducer: settingLanguageReducer,
//   globalState: globalStateReducer,
//   translateImage: translateImageReducer,
//   collection: collectionReducer,
// });

// const reducer: typeof combinedReducer = (state, action) => {
//   switch (action.type) {
//     case HYDRATE: {
//       const nextState = {
//         ...state, // use previous state
//         ...action.payload, // apply delta from hydration
//       };
//       return nextState;
//     }
//     default:
//       return combinedReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//       }),
//   });

// type Store = ReturnType<typeof makeStore>;

// export type AppDispatch = Store['dispatch'];
// export type RootState = ReturnType<Store['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export const wrapper = createWrapper(makeStore, { debug: false });
