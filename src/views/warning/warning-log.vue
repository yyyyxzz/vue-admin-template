<template>
  <div class="app-container log-container">
    <div>
      <div>
        <section>
          <h4>5月20日</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </section>
        <section>
          <h4>5月19日</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </section>
        <section>
          <h4>5月11日</h4>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" > 
.log-container {
  position: relative;
  overflow: visible;
  h4 {
    margin: 2em 0 0;
    background-color: #333;
    color: #fff;
    padding: 10px;
    top: 50px;
    z-index: 1;
    position: sticky;
  }

  ul {
    display: block;
    background-color: #ffffe0;
    position: relative;
    padding: 0px;
  }

  li {
    height: 36px;
    width: 36px;
    list-style-type: none;
    width: 100%;
    background-color: #f7f9f7;
    margin-top: 10px;
  }
}
</style>
