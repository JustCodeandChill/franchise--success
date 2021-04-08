export default (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const trimEmail = email.trim();
    if (re.test(trimEmail) === false) {
        return "Dạng Email không hợp lệ. Xin nhập email hợp lệ"
    }
}