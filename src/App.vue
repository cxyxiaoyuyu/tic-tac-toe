<template>
  <div id="app">
    <h3>这是一个井字棋游戏</h3>
    <div class="wrap">
      <div class="row" v-for="(row,index) in map" :key="index">
        <Cell 
          v-for="(cell,cindex) in row" 
          :key="cindex" 
          :text="cell"
          @click="handleClick(row,index,cindex)"
        />
      </div>
    </div>
    <div class="result"> {{ result }} 胜利了 </div>
    
  </div>
</template>

<script>
import Cell from './components/Cell.vue'

export default {
  name: 'App',
  data(){
    return {
      count: 0,
      result: '',
      map: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }
  },
  methods: {
    handleClick(row,x,y){
      let text = this.count % 2 === 1 ? 'o' : 'x'
      this.count ++
      this.$set(row, y, text)

      // 判断输赢
      const map = this.map
      if(map[x][0] === map[x][1] && map[x][0] === map[x][2]){  // 所在行
        this.result = text
      }

      if(map[0][y] === map[1][y] && map[0][y] === map[2][y]){  // 所在列
        this.result = text
      }

      if(x + y === 2){    // 判断右上-左下 对角线
        if(map[0][2] === map[1][1] && map[0][2] === map[2][0]){
          this.result = text
        }
      }

      if(x - y === 0){    // 判断左上-右下 对角线
        if(map[0][0] === map[1][1] && map[0][0] === map[2][2]){
          this.result = text
        }
      }
    },
  },
  components: {
    Cell
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.row {
  display: flex;
}
.result {
  font-size: 20px;
  margin-top: 20px;
};
</style>
