export type RouteType = {
    component: React.ComponentType,
    redirectTo: string
};

export type AuthorisationInitialState = {
    user: {
        name: string,
        email: string,
    },
    token: string,
    isLoggedIn: boolean,
    isRefresh: boolean,
    error:string
};

export type SignUpUserType = {
    name: string,
    email: string,
    password: string,
};
export type LoginUserType = {
    password: string,
    email: string,
    };
export type SignupRequestType = {
    user: {
        name: string,
        email: string
    },
    token: string
};
export type ContactRequestType = {
    id: string,
    name: string,
    number: string
}
export type ContactCreateType = {
    name: string,
    number: string
}