<template>
    <div id="reg" class="reg">
        <h3>
            登录
        </h3>
        <form action="" method="get">

        
        <p>
            <label for="user">
                用户
            </label>
            <input type="text" id="user" name="user" class="user">

        </p>
        <p>
            <label for="password">
                密码
            </label>
            <input type="password" id="password" name="password" class="password">

        </p>
        <p>
<input type="submit" value="登录">
        </p>
        </form>
    </div>
</template>
<script>
export default {
   mounted(){
        this.$emit('father',3)
    }
}
</script>
<style>
.reg{
    text-align: center;
    margin-top: 5rem;
}
#reg input {
    border: 1px solid #ccc;
    height: 2rem;
    width: 25rem;
}
#reg p{
    margin-top: 1rem;
}
</style>
