import axios from "../../plugins/axios";
import { useCookies } from "vue3-cookies";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async fetchQnas() {
      // qna 목록
      try {
        const response = await axios.get("http://localhost/api/qna");
        return response.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async createQna({ commit }, postData) {
      // qna 글 create
      try {
        const rs = await axios.post(
          "http://localhost/api/qna/store",
          postData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(rs);
        // qna 생성이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async getQna({ commit }, postId) {
      //qna 글 조회 READ
      try {
        const rs = await axios.get(`http://localhost/api/qna/${postId}`);
        console.log(rs.data);
        // 조회한 qna 정보를 처리합니다.
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async updateQna({ commit }, { postId, postData }) {
      // qna 글 수정 UPDATE
      try {
        const rs = await axios.post(
          `http://localhost/api/qna/${postId}`,
          postData
        );
        console.log(rs);
        // qna 수정이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async deleteQna({ commit }, postId) {
      // qna 글 삭제 DELETE
      try {
        const rs = await axios.delete(`http://localhost/api/qna/${postId}`);
        console.log(rs);
        // qna 삭제가 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async postAnswer({ commit }, { postId, answerData }) {
      // 댓글 작성
      try {
        const rs = await axios.post(
          `http://localhost/api/answers/store`,
          answerData
        );
        console.log(rs);
        // 댓글 작성이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteAnswer({ commit }, commentId) {
      // 댓글 삭제
      try {
        const rs = await axios.delete(
          `http://localhost/api/answers/${commentId}`
        );
        console.log(rs);
        // 댓글 삭제가 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
};
