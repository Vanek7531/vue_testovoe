<script setup lang="ts">
import { currentFlat } from '@/use/useflat'
import { allFlats } from '@/use/useFlats'

const props = defineProps({
  flat: {
    type: Object,
    default: {},
  },
  selectFlats: {
    default: [],
  },
})
const { flats } = allFlats()

const { takeColorStatus, takeType } = currentFlat()

const eventFlat = (flatId: number): any => {
  if (!props.selectFlats.includes(flatId)) {
    props.selectFlats.push(flatId)
  } else {
    console.log('1')
    let myIndex = props.selectFlats.indexOf(flatId)
    if (myIndex !== -1) {
      props.selectFlats.splice(myIndex, 1)
    }
  }

  return props.selectFlats
}
</script>

<template>
  <div class="flat-container" @click="eventFlat(flat.id)">
    <div class="check-box">
      <input v-model="props.selectFlats" :value="flat.id" type="checkbox" />
    </div>
    <div class="flat-container__top">
      <div style="display: flex; justify-content: space-between;">
        <div class="flat-container__price">{{ flat.price }}</div>
        <div
          class="flat-container__type"
          :class="takeType(flat.type)"
          v-if="['Паркинг', 'Кваритира'].includes(flat.type)"
        >
          {{ flat.type }}
        </div>
        <div
          class="flat-container__status"
          :class="takeColorStatus(flat.status)"
        >
          {{ flat.status }}
        </div>
      </div>
      <div class="flat-container__district">
        {{ flat.districtName }},
        <span>{{ flat.districtAdress }}</span>
      </div>
    </div>
    <div class="flat-container__middle">
      <div class="flat-container__middle-flat--info">
        <div>
          <div class="flat-container__apartanament">
            {{ flat.apartanament }}
          </div>
          <div class="flat-container__room">{{ flat.room }}</div>
        </div>
        <div class="line"></div>
        <div>
          <div class="flat-container__space">{{ flat.space }}</div>
          <div class="flat-container__floor">{{ flat.floor }}</div>
        </div>
      </div>
      <div class="flat-container__img">
        <img src="@/assets/flatImg.png" alt="flat" />
      </div>
    </div>
    <div class="flat-container__bottom">
      <div class="flat-container__adress">
        {{ flat.adress }}
      </div>
      <div class="flat-container__date">
        {{ flat.addDate }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flat-container {
  font-style: normal;
  color: black;
  height: 238px;
  width: 683px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  padding: 25px 35px 25px 92px;
  position: relative;
}
.check-box {
  position: absolute;
  top: 50%;
  left: 5%;
}
.flat-container__top {
}
.flat-container__price {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #ff0d29;
}
.flat-container__type {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  height: 26px;
  color: #232735;
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(94, 119, 157, 0.25);
  border-radius: 32px;
  padding: 5px 20px 5px 30px;
  display: flex;
  position: relative;
}
.apartment {
  &::before {
    padding-right: 11px;
    content: url('@/assets/svg/flatMini.svg');
  }
}
.parking {
  cursor: pointer;
  &::before {
    padding-right: 11px;
    content: url('@/assets/svg/car.svg');
  }
  &:hover {
    &::after {
      content: 'Подземная встроенно-пристроенная';

      position: absolute;
      width: 246px;
      height: 44px;
      bottom: -60px;
      left: 0;
      background: #2d2d2d;
      opacity: 0.7;
      color: white;
      box-shadow: 0px 8px 30px -3px rgba(26, 32, 44, 0.1),
        0px 4px 6px -2px rgba(26, 32, 44, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.flat-container__status {
  padding: 6px 9px 6px 23px;
  border: 1px solid black;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    border-radius: 50%;
    width: 6px;
    height: 6px;
    left: 10px;
    top: 15px;
  }
}
.red {
  border-color: #dd4c5d;
  background: #ffe4e4;
  color: #dd4c5d;
  &::before {
    background: #dd4c5d;
  }
}
.blue {
  border-color: #0291c1;

  color: #0291c1;
  background: #d6f5ff;
  &::before {
    background: #0291c1;
  }
}
.grey {
  border-color: #686868;
  background: #ededed;
  color: #686868;
  &::before {
    background: #686868;
  }
}
.disable {
  border-color: #808080;
  background: #cccccc;
  color: #808080;
  &::before {
    background: #808080;
  }
}
.flat-container__district {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  max-width: 280px;
  span {
    color: #808080;
  }
}

.flat-container__middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .line {
    border: 1px solid #c4c4c4;
    width: 1px;
  }
}
.flat-container__middle-flat--info {
  display: flex;
  width: 250px;
  justify-content: space-between;
}
.flat-container__apartanament {
}
.flat-container__room {
}
.flat-container__space {
}
.flat-container__floor {
}

.flat-container__bottom {
  display: flex;
  justify-content: space-between;
}
.flat-container__adress {
  max-width: 300px;
}
.flat-container__date {
  color: #9b9b9b;
}
@media (max-width: 1200px) {
  .flat-container {
    width: 490px;
    height: 100%;
    padding-left: 67px;
  }
}
</style>
