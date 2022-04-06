let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city || '北京'
    localStorage.city = defaultCity
  }
} catch (error) {
}

export default {
  state: {
    city: defaultCity || '北京'
  }
}
