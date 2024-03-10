import { createStore } from "vuex";
import axiosClient from "../axiios";
const tmpSurveys = [
    {
        id: 1,
        user_id: 1,
        title: "Survey 1",
        slug: "survey-1",
        status: "draft",
        image: "https://images.unsplash.com/photo-1709874662602-139e1114da11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
        description: "Description for Survey 1",
        created_at: "2022-01-01 12:00:00",
        updated_at: "2022-01-01 12:10:00",
        expire_date: "2022-01-31 23:59:59",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country you are",
                description: null,
                data: {
                    options: [
                        { uuid: "skdjhf", text: "USA" },
                        { uuid: "iyewrt", text: "ENGLAND" },
                        { uuid: "sjkd-sdf", text: "GERMANY" },
                        { uuid: "eyr-sb", text: "CHINA" },
                    ],
                },
            },
            {
                id: 2,
                type: "checkbox",
                question: "which language videos you want to watch",
                description: null,
                data: {
                    options: [
                        { uuid: "skdjhfjd", text: "PHP" },
                        { uuid: "iyewrt-eyr", text: "javascript" },
                        { uuid: "sjkd-sdf-djfh", text: "Laravel" },
                        { uuid: "eyr-sb-dfjk", text: "Vue js" },
                    ],
                },
            },
            {
                id: 3,
                type: "checkbox",
                question: "which Programming language do you love",
                description: null,
                data: {
                    options: [
                        { uuid: "skdjhfjd-skjdfh", text: "Flutter" },
                        { uuid: "iyewrt-eyr-skdjh", text: "Java" },
                        { uuid: "sjkd-sdf-djfh-djkfh", text: "Python" },
                        { uuid: "eyr-sb-dfjk-kjfh", text: "javascript" },
                    ],
                },
            },
            {
                id: 4,
                type: "text",
                question: "What is your name?",
                description: null,
                data: {
                    placeholder: "Enter your name",
                },
            },
            {
                id: 5,
                type: "textarea",
                question: "Enter your feedback",
                description: null,
                data: {
                    placeholder: "Enter your feedback here",
                    rows: 4,
                },
            },
        ],
    },

    {
        id: 2,
        user_id: 2,
        title: "Survey 2",
        slug: "survey-2",
        status: "draft",
        image: "https://images.unsplash.com/photo-1709929170176-bc35e8bd57b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        description: "Description for Survey 2",
        created_at: "2022-02-01 10:00:00",
        updated_at: "2022-02-01 10:20:00",
        expire_date: "2022-02-28 23:59:59",
        questions: [
            {
                id: 2,
                type: "select",
                question: "From which country you are",
                description: null,
                data: {
                    options: [
                        { uuid: "skdjhfj", text: "USA" },
                        { uuid: "iyewrtf", text: "ENGLAND" },
                        { uuid: "sjkd-sdfu", text: "GERMANY" },
                        { uuid: "eyr-sbr", text: "CHINA" },
                    ],
                },
            },
        ],
    },
    {
        id: 3,
        user_id: 3,
        title: "Survey 3",
        slug: "survey-3",
        status: "draft",
        image: "https://images.unsplash.com/photo-1709572563747-5de4d256fa6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
        description: "Description for Survey 3",
        created_at: "2022-02-01 10:00:00",
        updated_at: "2022-02-01 10:20:00",
        expire_date: "2022-02-28 23:59:59",
        questions: [
            {
                id: 2,
                type: "select",
                question: "From which country you are",
                description: null,
                data: {
                    options: [
                        { uuid: "skdjhfj", text: "USA" },
                        { uuid: "iyewrtf", text: "ENGLAND" },
                        { uuid: "sjkd-sdfu", text: "GERMANY" },
                        { uuid: "eyr-sbr", text: "CHINA" },
                    ],
                },
            },
        ],
    },
];
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys: [...tmpSurveys],
    },
    getters: {},
    actions: {
        register: ({ commit }, user) => {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("SetUser", data);
                return data;
            });
        },
        login: ({ commit }, user) => {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("SetUser", data);
                return data;
            });
        },
        logout: ({ commit }) => {
            return axiosClient.post(`/logout`).then(({ data }) => {
                commit("logout");
                return data;
            });
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null; // Clear token in state

            // Clear token in sessionStorage
            sessionStorage.removeItem("TOKEN");
        },
        SetUser: (state, UserData) => {
            state.user.token = UserData.token;
            state.user.data = UserData.user;
            sessionStorage.setItem("TOKEN", UserData.token);
        },
    },
    modules: {},
});

export default store;
