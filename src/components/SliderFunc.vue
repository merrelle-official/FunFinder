<template>
    <div class="main__slider" >
        <button :disabled="!showPrevButton" :style="{ opacity: showPrevButton ? 1 : 0.5 }" class="prev__elem" @click="prevSlide"><img src="../assets/arrow.svg" alt="<"></button>
        <div class="slider__content" ref="sliderMain" >
            <div :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }" ref="sliderContent">
                <slot :currentSlide="currentSlide" @nextSlide="nextSlide"></slot>
            </div>
            
        </div>
        <button :disabled="!showNextButton || !isSliderContentSmaller" :style="{ opacity: (!showNextButton || !isSliderContentSmaller) ? 0.5 : 1 }" class="next__elem" @click="nextSlide"><img src="../assets/arrow.svg" alt="<"></button>
    </div>
</template>

<script>
export default {
  name: 'SliderFunc',
  data() {
    return {
      currentSlide: 0,
      totalSlides: 0,
      slideWidth: 0, // Добавлено для хранения ширины слайда
      stepMultiplier: 3, // Добавлен множитель для увеличенного шага
      isSliderContentSmaller: true,
    };
  },
  computed: {
    showPrevButton() {
      return this.currentSlide > 0;
    },
    showNextButton() {
      return this.currentSlide < this.totalSlides - 1;
    },

  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide += this.stepMultiplier;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide -= this.stepMultiplier;
      }
    },
    calculateSlideWidth() {
      if (this.$el && this.$el.clientWidth && this.totalSlides > 0) {
        this.slideWidth = this.$el.clientWidth / (this.totalSlides * this.stepMultiplier);
        this.updateIsSliderContentSmaller();
      }
    },
    updateIsSliderContentSmaller() {
      const parentCont = this.$refs.sliderMain ? this.$refs.sliderMain.clientWidth : 0;
      const childCont = this.$refs.sliderContent ? this.$refs.sliderContent.scrollWidth : 0;
      this.isSliderContentSmaller = childCont <= parentCont;
    },
  },
  created() {
    this.totalSlides = this.$slots.default ? this.$slots.default().length : 0;
    this.calculateSlideWidth();
  },
  watch: {
    totalSlides() {
      this.calculateSlideWidth();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Structures.scss';
.main__slider{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.prev__elem, .next__elem{
    min-width: 50px;
    min-height: 50px;
    background-color: $secondColor;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prev__elem{
    margin-right: 2rem;
    img{
        transform: translateX(-3px);
    }
}

.next__elem{
    margin-left: 2rem;
    img{
        transform: rotate(180deg) translateX(-3px);
    }
}

.slider__content{
    display: flex;
    justify-content: center;
    flex: 1;
    overflow: hidden;
    // transition: transform 0.3s ease-in-out;
    & div{
       display: flex;
       flex-wrap: nowrap; 
       transition: transform 0.3s ease-in-out;
    }
}

</style>