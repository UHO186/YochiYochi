import axios from "../../plugins/axios";
import { useCookies } from "vue3-cookies";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    async indexGame() {
      try {
        const rs = await axios.get("http://localhost/api/gameindex")
        return rs.data
      } catch (error) {
        console.log(err);
        throw err;
      }
    },

    async indexScore() {
      // 기록 목록
      try {
        const rs = await axios.get("http://localhost/api/score");
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async storeScore({ commit }, scoreData) {
      // 기록 저장
      try {
        const rs = await axios.post(
          "http://localhost/api/score/store",
          scoreData
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteScore({ commit }, scoreId) {
      // 기록 삭제 DELETE
      try {
        const rs = await axios.delete(`http://localhost/api/score/${scoreId}`);
        console.log(rs);
        // 기록 삭제가 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async indexImg({ commit }, game_id) {
      // 게임별 이미지 목록 보기
      try {
        const rs = await axios.get(`http://localhost/api/gameimg/${game_id}`);
        console.log(rs);
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async storeImg({ commit }, imgData) {
      // 게임 이미지 저장
      try {
        console.log("파일확인", imgData);
        const rs = await axios.post(
          "http://localhost/api/gameimg/store",
          imgData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(rs);
        // 게임 이미지 저장이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteImg({ commit }, img_id) {
      // 게임 이미지 삭제
      try {
        const rs = await axios.delete(`http://localhost/api/gameimg/${img_id}`);
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async indexWord({ commit }, game_id) {
      // 게임 단어 목록 보기
      try {
        const rs = await axios.get(`http://localhost/api/gameword/${game_id}`);
        console.log(rs);
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async storeWord({ commit }, wordData) {
      // 게임 단어 저장
      try {
        const rs = await axios.post(
          "http://localhost/api/gameword/store",
          wordData
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteWord({ commit }, word_id) {
      // 게임 단어 삭제
      try {
        const rs = await axios.delete(
          `http://localhost/api/gameword/${word_id}`
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    // ------------------- 커스텀 -------------------------
    async indexCustomImg({ commit }, game_id) {
      // 게임별 커스텀 이미지 목록 보기
      try {
        const rs = await axios.get(
          `http://localhost/api/customgameimg/${game_id}`
        );
        console.log(rs);
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async storeCustomImg({ commit }, imgData) {
      // 게임 커스텀 이미지 저장
      try {
        console.log("파일확인", imgData);
        const rs = await axios.post(
          "http://localhost/api/customgameimg/store",
          imgData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(rs);
        // 게임 커스텀 이미지 저장이 성공하면 필요한 작업을 수행합니다.
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteCustomImg({ commit }, img_id) {
      // 게임 커스텀 이미지 삭제
      try {
        const rs = await axios.delete(
          `http://localhost/api/customgameimg/${img_id}`
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async indexCustomWord({ commit }, game_id) {
      // 게임 단어 목록 보기
      try {
        const rs = await axios.get(
          `http://localhost/api/customgameword/${game_id}`
        );
        console.log(rs);
        return rs.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async storeCustomWord({ commit }, wordData) {
      // 게임 단어 저장
      try {
        const rs = await axios.post(
          "http://localhost/api/customgameword/store",
          wordData
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },

    async deleteCustomWord({ commit }, word_id) {
      // 게임 단어 삭제
      try {
        const rs = await axios.delete(
          `http://localhost/api/customgameword/${word_id}`
        );
        return rs.data.msg;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
};
