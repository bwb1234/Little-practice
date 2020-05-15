
function defineReactive(data,key,val){
    observe(val); // 递归遍历所有子属性 
    var dep = new Dep()
    //需要创建一个可以容纳订阅者的消息订阅器Dep，订阅器Dep主要负责收集订阅者，然后再属性变化的时候执行对应订阅者的更新函数,
    //所以显然订阅器需要有一个容器，这个容器就是list
    Object.defineProperty(data,key,{
      enumerable: true,
      configurable: true,
      get:function(){
          if (Dep.target) { // 判断是否需要添加订阅者
           dep.addSub(Dep.target); // 在这里添加一个订阅者
              }
        return val;
      },
      set:function(newVal){
          if(val===newVal){
              return;
          }
        val = newVal;
        console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”');
        dep.notify(); // 如果数据变化，通知所有订阅者
      }
    })
  }
  Dep.target = null;
  
  function Dep () {
      this.subs = [];
  }
  Dep.prototype = {
      addSub: function(sub) {
          this.subs.push(sub);
      },
      notify: function() {
          this.subs.forEach(function(sub) {
              sub.update();
          });
      }
  };


  //需要将Observer和Watcher关联起来：
// function SelfVue (data, el, exp) {
//     this.data = data;
//     observe(data);
//     el.innerHTML = this.data[exp];  // 初始化模板数据的值
//     new Watcher(this, exp, function (value) {
//         el.innerHTML = value;
//     });
//     return this;
// }

//是还有一个细节问题,我们在赋值的时候是这样的形式 '  selfVue.data.name = 'canfoo'' 而我们理想的形式是'  selfVue.name = 'canfoo'  '
//为了实现这样的形式，我们需要在new SelfVue的时候做一个代理处理
//，让访问selfVue的属性代理为访问selfVue.data的属性，实现原理还是使用Object.defineProperty( )对属性值再包一层

function SelfVue (data, el, exp) {
    var self = this;
    this.data = data;

    Object.keys(data).forEach(function(key) {
        self.proxyKeys(key); // 绑定代理属性
    });

    observe(data);
    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });
    return this;
}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        });
    }
}


