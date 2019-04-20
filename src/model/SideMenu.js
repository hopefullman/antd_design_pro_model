import request from '../util/request';  
export default {
 namespace: 'SideMenu',
  state: {
    data: [
      
    ],
    couter:0
  },
   effects: { 
    // 定义 effects 成员
    'onDidGetInit': function*(_,sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = 'http://localhost:8000/api/SideMenu';
      // console.log(endPointURI)
      const SideMenu = yield call(request, endPointURI);
      // console.log(SideMenu.data);
      yield put({ type: 'onDidGetReducer', payload: SideMenu });
    }
  },
  reducers: {
    onDidGetReducer(state, { payload: SideMenu}) {
      // console.log(SideMenu);
      const nextData=[...state.data,...SideMenu.data]
      return {
        data: nextData
      };
    }
  },
}