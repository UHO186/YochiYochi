<template>
    <div>
        <table>
            <tr>
                <th>NO</th>
                <th>TITLE</th>
                <th>CONTENT</th>
            </tr>
            <tr v-for="n in notices">
                <td>{{ n.id }}</td>
                <a>
                    <td>{{ n.post_title }}</td>
                </a>
                <td>{{ n.post_content }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        notices: {
            type: Array,
        }
    }
}
</script>