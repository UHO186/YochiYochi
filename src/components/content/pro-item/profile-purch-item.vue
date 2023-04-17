<template>
    <div v-for="item, index in purchase" :key="index">            
        <div class="border-2 p-4 mt-10 font-semibold text-[14px]">
            <div class="flex justify-between">
                <div class="grid grid-cols-2 content-center justify-items-start text-lg">
                    <p>2000.7.14 주문</p> <!-- 날짜 받아오기 -->
                    <p class="ml-5">주문번호: {{item.orderNum}}</p>
                </div>
                <div class="bg-blue-400 text-white rounded-lg px-3 py-2 text-[15px] cursor-pointer">주문 상세보기</div>
            </div>
            <div class="flex border-2 p-5 mt-3 rounded-md">
                <div class=" border-r-2" style="max-width: 200px;">
                    <img :src="item.img" alt="상품1"> <!-- 상품+상품번호로 저장된거 가져오기-->
                </div>
                <div class="ml-5 flex-1 grid content-center justify-items-start border-r-2">
                    <div class="dflex">상품번호: <p class="tblack">{{ item.itemNum }}</p></div>
                    <div class="dflex">상품명: <p class="tblack">{{ item.itemName }}</p></div>
                    <div class="dflex">가격・수량: <p class="tblack">{{ item.price }} 원・{{ item.qty }} 개</p></div>
                    <div class="dflex">주소: <p class="tblack">{{ item.address }}</p></div>
                    <div class="dflex">이름・연락처: <p class="tblack">{{ item.name }}・{{ item.contact }}</p></div>
                    <div class="dflex">배달현황: 
                        <p class="tblack" v-if="item.shipper">배송완료</p>
                        <p class="tblack" v-else>배송중</p>
                    </div>
                </div>
                <div class="pl-10 grid content-center basis-1/5">
                    <div class="border-2 border-blue-300 text-blue-300 py-0.5 cursor-pointer">배송조회</div>
                    <div class="border-2 mt-2 py-0.5 cursor-pointer">주문 ・ 배송 취소</div>
                    <div v-if="item.shipper" class="border-2 mt-2 py-0.5 cursor-pointer">리뷰 작성하기</div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-start">
        <p class="text-xl font-semibold cursor-pointer bg-black text-white rounded-lg p-2 hover:text-amber-300 mt-3" @click="backGame">돌아가기</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: [],
            purchase: [],
        }
    },
    mounted() {
        for(var i = 1; i < 30; i++) { // 테스트용 더미 데이터
            this.testData.push({img: "item/test1.jpg", orderNum: i, itemNum: i, itemName: "상품상품상품" ,price: 1000000, qty: i, address: "주소주소주소주소주소주소주소주소주소", contact: "010-1234-5678", name: "윤영운", shipper: true})
        }
        for(var i = 0; i < 5; i++) {
            this.purchase.push(this.testData[i])
        }
    },
    methods: {
        backGame() {
            this.$emit("backGame")
        }
    }
}
</script>

<style>
.dflex {
    display: flex;
    color:rgb(95, 95, 95);
}

.tblack {
    color:black;
    margin-left: 10px;
}
</style>