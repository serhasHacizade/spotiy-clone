<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Play from "vue-material-design-icons/Play.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";

let isHover = ref(false);
const props = defineProps({ slide: Object });
</script>
<template>
  <div class="pl-8">
    <RouterLink to="/artist" class="cursor-pointer">
      <div
        class="relative"
        @mouseenter="($event) => (isHover = true)"
        @mouseleave="($event) => (isHover = false)"
      >
        <div
          class="absolute w-full h-full bg-black z-10 rounded-md"
          :class="
            isHover
              ? 'transition ease-in duration-150 bg-opacity-30'
              : 'transition ease-out duration-150 bg-opacity-5'
          "
        />
        <div class="absolute z-50 bottom-3 left-3 rounded-full bg-white p-1.5">
          <Play :size="27" />
        </div>
        <div
          class="absolute z-50 bottom-3 left-[60px] rounded-full bg-white p-2"
          :class="
            isHover
              ? 'transition ease-in duration-150 bg-opacity-100'
              : 'transition ease-out duration-150 bg-opacity-0'
          "
        >
          <HeartOutline
            :size="23"
            :class="
              isHover
                ? 'transition ease-in duration-150 opacity-100'
                : 'transition ease-out duration-150 opacity-0'
            "
          />
        </div>
        <div
          class="absolute z-50 bottom-3 left-[107px] rounded-full bg-white p-1.5"
          :class="
            isHover
              ? 'transition ease-in duration-150 bg-opacity-100'
              : 'transition ease-out duration-150 bg-opacity-0'
          "
        >
          <DotsHorizontal
            :size="27"
            :class="
              isHover
                ? 'transition ease-in duration-150 opacity-100'
                : 'transition ease-out duration-150 opacity-0'
            "
          />
        </div>
        <img
          src="/images/deezer-sound-icon.png"
          width="25"
          class="absolute z-40 right-0 bottom-0 pb-3 mr-3 contrast-[1.4] brightness-[1.1]"
          alt=""
        />
        <img :src="slide.url" alt="" class="rounded-md aspect-square" />
      </div>
      <div class="text-white text-left mt-2">
        <div class="text-sm hover:underline cursor-pointer">{{ slide.song }}</div>
        <div class="text-[13px] flex hover:underline text-[#858590] pt-0.5">by {{ slide.by }}</div>
        <div class="text-[11px] pt-0.5 text-[#858590]">Released on {{ slide.releasedOn }}</div>
      </div>
    </RouterLink>
  </div>
</template>
