<template>
    <button class="body">
        <p class="button__text">{{ buttonText }}</p>
    </button>
</template>

<script>
export default{
    name: 'FilterButton',
    props: {
        buttonText: String
    }
}
</script>

<style lang="scss" scoped>
@import "../Structures.scss";
.body{
    background-color: $secondColor;
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 30px;
    .button__text{
        color: $secondTextColor;
    }
    &:hover{
        cursor: pointer;
    }
}

</style>