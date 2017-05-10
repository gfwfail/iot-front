<style lang="scss" scoped>
  .headerWrapper {
    height: 80px;
  }

  .header {
    height: 80px;
    background-color: rgba(32, 160, 255, 1);
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;
    overflow: hidden;

    .container {
      height: 100%;
      box-sizing: border-box;
      width: 90%;
      margin:0 auto;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;

      a {
        color: #fff;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
    .nav {
      float: right;
      height: 100%;
      line-height: 80px;
      background: transparent;
      padding: 0;
      margin: 0;
    }
    .nav-logo {
      vertical-align: sub;
      margin-left:40px;
      padding-top:10px;
      transition: all 1s ease;
      animation: logoflash 5s infinite;
      &:hover {

      }
    }
    @keyframes logoflash {
      0% {
        filter: invert(0%);
        transform: scale(2);
        opacity: 1;
      }

      50% {
        filter: invert(10%);
        transform: scale(0.85);
        opacity: 0;
      }
      100% {
        filter: invert(0%);
        transform: scale(2);
        opacity: 1;
      }

    }

    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;
      margin-left: 20px;

      &:last-child {
        cursor: default;
        margin-left: 34px;
        span {
          opacity: .8;
        }

        .nav-lang {
          cursor: pointer;
          display: inline-block;
          height: 100%;
          &:hover {
            opacity: 1;
          }
          &.active {
            font-weight: 700;
            opacity: 1;
          }
        }
      }

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 0 20px;
        opacity: .8;
        &.active,
        &:hover {
          opacity: 1;
        }

        &.active {
          font-weight: 700;
        }

        &.active::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #99d2fc;
        }
      }
    }
  }

  .header-home {
    position: fixed;
    top: 0;
    background-color: rgba(32, 160, 255, 0);
  }

  @media (max-width: 850px) {
    .header {
      .nav-logo {
        display: none;
      }
      .nav-logo-small {
        display: inline-block;
      }
      .nav-item {
        margin-left: 6px;

        &:last-child {
          margin-left: 10px;
        }

        a {
          padding: 0 5px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .header {
      .container {
        padding: 0 12px;
      }
      .nav-item a,
      .nav-lang {
        font-size: 12px;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header" style="background-color: rgb(32, 160, 255);">
      <div class="container"><h1 style="position: relative"><img
        src="../assets/logo.svg" style="width:160px;" class="nav-logo">
        <img style="position: absolute;top:34px;left:60px;width:120px;"
          src="../assets/text.svg">
      </h1>
        <ul class="nav">
          <li class="nav-item"><a href="#/" class="" class="active">Dashboard
          </a></li>
          <li class="nav-item"><a href="#/zh-CN/component">Logout
          </a></li>

        </ul>
      </div>
    </header>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        active: '',
        isHome: false,
        headerStyle: {}
      };
    }
  };
</script>
