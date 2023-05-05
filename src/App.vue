<script setup lang="ts">
import flat from './components/Flat.vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Seacrh from './components/seacrh.vue'
import { allFlats } from './use/useFlats'

const { flats, selectFlats, search, delSel, callback, selAll } = allFlats()
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <div class="search">
        	<input
	          class="search-input"
	          type="text"
	          v-model="search"
	          placeholder="Введите ЖК / корпус / № квартиры / № паркинга"
	        />
        </div>
        <div style="display: flex; align-items: center;">
          <div class="select-all">
            <input type="checkbox" value="ВСЕ" @click="selAll()" />
          </div>
          <button class="del-select" @click="callback = true">Удалить</button>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="flats" v-for="flat in flats" :key="flat.id">
      <flat :flat="flat" :selectFlats="selectFlats" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.search-input {
  width: 100%;
  height: 38px;
  padding-left: 100px;
  border: 1px solid #c4c4c4;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  /* dark_gray */

  color: #9b9b9b;
  &:focus {
    border: none;
    outline: none;
  }
}
.search {
	position: relative;
	&::after {
		position: absolute;
		left: 30px;
		top: 8px;
    content: url(@/assets/svg/search.svg);
    height: 20px;

  }
}
.select-all {
  margin-right: 15px;
}
.del-select {
  display: flex;
  padding-left: 10px;
  align-items: center;
  width: 100px;
  height: 40px;
  background: #e5e5e5;
  border: none;
  &::after {
    content: url(@/assets/svg/trash.svg);
    height: 20px;
  }
}
</style>
