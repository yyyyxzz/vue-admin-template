const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  getData:state =>state.data.getData,
  realData:state=>state.data.realData
}
export default getters
