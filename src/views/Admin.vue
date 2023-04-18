<template>
    <div>
        <h3>카드기억게임 이미지 추가</h3>
        <input type="file" @change="onFileChange" ref="fileInput" multiple>
        <button @click="uploadFile">Upload</button>
    </div>
    <div>
        <h3>산성비게임 단어 추가</h3>
        <input v-model="inputWord" />
        <button @click="uploadWord">Upload</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputWord: ''
        }
    },
    methods: {
        onFileChange(event) {
            this.selectedFiles = event.target.files;
        },
        async uploadFile() {
            if (!this.selectedFiles || this.selectedFiles.length === 0) {
                console.log("No image files found.");
                return;
            }
            const formData = new FormData();
            formData.append("game_id", 1);
            for (let i = 0; i < this.selectedFiles.length; i++) {
                formData.append("attachment", this.selectedFiles[i]);
            }
            try {
                const cuslist = await this.$store.dispatch("game/storeImg", formData);
                console.log('Files uploaded successfully')
            } catch (err) {
                console.log('Failed to upload files:', err)
            }
        },
        async uploadWord() {
            try {
                const cuslist = await this.$store.dispatch("game/storeWord", {
                    game_id: 2,
                    word: this.inputWord
                });
            } catch (err) {
                console.error(err);
            }
        }
    }
}
</script>