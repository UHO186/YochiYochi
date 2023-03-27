import axios from "../../plugins/axios";
import { useCookies } from "vue3-cookies";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async fetchItems() {
      // 상품 목록
      try {
        const response = await axios.get("http://localhost/api/items");
        return response.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async createItem({ commit }, itemData) {
      // 상품 create
      try {
        const rs = await axios.post(
          "http://localhost/api/items/store",
          itemData
        );
        console.log(rs);
        // 상품 생성이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async getItem({ commit }, itemId) {
      //상품 조회 READ
      try {
        const rs = await axios.get(`http://localhost/api/items/${itemId}`);
        console.log(rs.data);
        // 조회한 상품 정보를 처리합니다.
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async updateItem({ commit }, { itemId, itemData }) {
      // 상품 수정 UPDATE
      try {
        const rs = await axios.post(
          `http://localhost/api/items/${itemId}`,
          postData
        );
        console.log(rs);
        // 상품 수정이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    async deleteItem({ commit }, itemId) {
      // 상품 삭제 DELETE
      try {
        const rs = await axios.delete(`http://localhost/api/items/${itemId}`);
        console.log(rs);
        // 상품 삭제가 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async postReview({ commit }, { itemId, reviewData }) {
      // 댓글 작성
      try {
        const rs = await axios.post(
          `http://localhost/api/reviews/store`,
          reviewData
        );
        console.log(rs);
        // 댓글 작성이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteReview({ commit }, reviewId) {
      // 댓글 삭제
      try {
        const rs = await axios.delete(
          `http://localhost/api/reviews/${reviewId}`
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
