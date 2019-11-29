<template lang="pug">
  .modal-box(v-if="show", :id="id")
    .modal-box__overlay(@click="$emit('click')")
    .modal-box__content
      .modal-box__header
        | {{ title }}
        img(
          :src="require(`../../images/title.png`)",
          alt="Close modal",
          @click="$emit('click')"
        )
      .modal-box__body
        slot
      .modal-box__footer
        button(type="button", @click="$emit('click')") Save
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
  .modal-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    
    &__overlay {
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: .25;
    }

    &__content {
      padding: 30px;
      width: $breakpoint-sm;
      max-height: calc(100vh - 10px);
      overflow: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-background);
      border: 1px solid var(--color-border);
      border-radius: 5px;
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
      
      @media screen and (max-width: $breakpoint-sm + 10px) {
        width: calc(100% - 10px);
      }
    }

    &__header {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--font-sm);
      color: #B1B1B1;
      text-transform: uppercase;

      img {
        width: 10px;
        height: 10px;
        cursor: pointer;
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        margin-top: 30px;
        width: 95px;
        height: 32px;
        background-color: var(--color-highlight);
        border-radius: 5px;
        font-size: var(--font-sm);
        color: #FFFFFF;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
</style>
