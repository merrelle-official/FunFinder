<template>
    <button class="button__body">
        <p class="button__text">{{ buttonText }}</p>
    </button>
</template>

<script>
export default{
    name: 'FilterButton',
    props: {
        buttonText: String,
        id: Number,
    }
}
</script>

<style lang="scss" scoped>
@import "../Structures.scss";
.button__body{
    background-color: $secondColor;
    font-weight: bold;
    padding: 0.6rem 1.3rem;
    border-radius: 30px;
    margin: 0 1rem;
    white-space: nowrap;
    .button__text{
        color: $secondTextColor;
    }
    &:hover{
        cursor: pointer;
    }
}

</style>