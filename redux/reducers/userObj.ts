// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const SET_USER = "userObj/SET_USER" as const;
const DECREASE = "userObj/DECREASE" as const;
const INCREASE_BY = "userObj/INCREASE_BY" as const;

// 액션 생성함수를 선언합니다
export const setUser = (user: {
    displayName: string;
    uid: number;
    args: any;
}) => ({
    type: SET_USER,
    payload: user,
});

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type UserAction = ReturnType<typeof setUser>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type UserState = {
    isLoading: boolean;
    displayName?: string;
    uid?: number;
};

// 초기상태를 선언합니다.
const initialState: UserState = {
    isLoading: true,
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
function userObj(
    state: UserState = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case SET_USER: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
            return {
                isLoading: false,
                displayName: action.payload.displayName,
                uid: action.payload.uid,
            };
        default:
            return state;
    }
}

export default userObj;
