import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
    credentials: "include",
  }),
  tagTypes: [
    "tips",
    "isLogin",
    "profile",
    "currentUser",
    "isTeacher",
    "class",
    "topic",
    "course",
    "content",
  ],
  endpoints: (builder) => ({
    // auth api start
    register: builder.mutation({
      query: (signupData) => ({
        url: "api/user/register",
        method: "POST",
        body: signupData,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: "api/user/login",
        method: "POST",
        body: loginData,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["isLogin", "profile", "currentUser", "isTeacher"],
    }),
    isLoggedIn: builder.query({
      query: () => ({
        url: "api/user/isLoggedIn",
        method: "GET",
      }),
      providesTags: ["isLogin"],
    }),

    isTeacher: builder.query({
      query: () => ({
        url: "api/user/isTeacher",
        method: "GET",
      }),
      providesTags: ["isTeacher"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "api/user/logout",
        method: "PATCH",
      }),
      invalidatesTags: ["isLogin", "currentUser"],
    }),
    currentUser: builder.query({
      query: () => ({
        url: "api/user",
        method: "GET",
      }),
      providesTags: ["currentUser"],
    }),

    getClasses: builder.query({
      query: () => ({
        url: "api/class",
        method: "GET",
      }),
      providesTags: ["class"],
    }),

    viewCourses: builder.query({
      query: () => ({
        url: `api/course`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),

    viewTips: builder.query({
      query: () => ({
        url: `api/tips`,
        method: "GET",
      }),
      providesTags: ["tips"],
    }),

    addCourse: builder.mutation({
      query: (formData) => ({
        url: `api/course/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["course"],
    }),

    viewTopic: builder.query({
      query: () => ({
        url: `api/topic`,
        method: "GET",
      }),
      providesTags: ["topic"],
    }),
    // addTopic: builder.mutation({
    //   query: (formData) => ({
    //     url: `api/topic/add`,
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["topic"],
    // }),

    // viewTopicContent: builder.query({
    //   query: () => ({
    //     url: `api/topicContent`,
    //     method: "GET",
    //   }),
    //   providesTags: ["content"],
    // }),

    // addTips: builder.mutation({
    //   query: (formData) => ({
    //     url: "api/tips/add",
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["tips"],
    // }),

    addTips: builder.mutation({

      query: (formData) => {
        console.log(formData);
        const payload = new FormData();

        payload.append("topicName", formData.topicName);
        payload.append("topicDesc", formData.topicDesc);
        payload.append("topicAvatar", formData.topicAvatar);
        

        return {
          url: `api/tips/add`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["tips"],
    }),
  }),
});

export const {
	useRegisterMutation,
	useCurrentUserQuery,
	useLoginMutation,
	useIsLoggedInQuery,
	useLogoutMutation,
	useIsTeacherQuery,

	useGetClassesQuery,
	useAddTipsMutation,
	useViewTipsQuery,

	useViewCoursesQuery,
	useAddCourseMutation,

	useAddTopicMutation,
	useViewTopicQuery,

	
} = api;
