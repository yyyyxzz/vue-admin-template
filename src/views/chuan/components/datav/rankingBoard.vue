<template>
  <div id="ranking-board">
    <div class="ranking-board-title">用能增幅排行

    </div>
    <dv-scroll-ranking-board :config="config" />
  </div>
</template>

<script>
export default {
  name: 'RankingBoard',
  data () {
    return {
      config: {
        data: [
          {
            name: '新兴公司食堂',
            value: -55
          },
          {
            name: '斑鸠山鸡场',
            value: 10
          },
          {
            name: '沙村鸡场',
            value: 7
          },
          {
            name: '福安鸡场',
            value: 6
          },
          {
            name: '高村鸡场',
            value: 8
          },
          {
            name: '斑鱼山种鸡场',
            value: 4
          },
          {
            name: '长江鸡场',
            value: 29
          },
          {
            name: '水围村猪场',
            value: 2
          },
          {
            name: '簕竹饲料厂',
            value: 2
          },
          {
            name: '榄根孵化厂',
            value: 9
          },
          {
            name: '翔顺象窝酒店',
            value: -29
          },
          {
            name: '禅泉酒店',
            value: -10
          }
        ],
        rowNum: 12, unit: '%'
      }
    }
  }
}
</script>

<style lang="scss">
#ranking-board {
  height: 100%;
  width: 15%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 10px;
  .ranking-board-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
