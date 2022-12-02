ccount\Center\Content\Center\BookList\Bottom\CreateNewAccountBook.vue:58:5:
56 | },
57 | methods:{
> 58 |     onInput(event){
   |     ^
59 |         const input = event.target.value
60 |         this.getNewBookName(input)
61 |     },


warning: Argument 'event' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Account\Center\Content\Center\BookList\Bottom\CreateNewAccountBook.vue:58:13:
56 | },
57 | methods:{
> 58 |     onInput(event){
   |             ^
59 |         const input = event.target.value
60 |         this.getNewBookName(input)
61 |     },


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:92:1:
90 |     DeleteLabel,
91 | },
> 92 | data(){
   | ^
93 |     return{
94 |         type:'支出',//选择支出收入模式
95 |


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:118:5:
116 | },
117 | computed:{
> 118 |     index(){
    |     ^
119 |         if(this.type === '支出'){
120 |             return 0
121 |         }else if(this.type === '收入'){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:129:5:
127 | },
128 | methods:{
> 129 |     changeType(){
    |     ^
130 |         if(this.type === '支出'){
131 |             this.type = '收入'
132 |             return


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:141:5:
139 |         }
140 |     },//更改支付收入模式，控制标签列表显示        
> 141 |     choseLabel(value){
    |     ^
142 |         let index = this.index
143 |         if(!value.activeFlag){
144 |             for(let i = 0;i<this.labelsList[index].length;i++){


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:141:16:
139 |         }
140 |     },//更改支付收入模式，控制标签列表显示        
> 141 |     choseLabel(value){
    |                ^
142 |         let index = this.index
143 |         if(!value.activeFlag){
144 |             for(let i = 0;i<this.labelsList[index].length;i++){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:162:5:
160 |         }
161 |     },//选择标签
> 162 |     choseModifyLabel(value){
    |     ^
163 |         this.addOrModifyType = true
164 |         this.choseLabel(value)
165 |     },//选择进行修改标签


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:162:22:
160 |         }
161 |     },//选择标签
> 162 |     choseModifyLabel(value){
    |                      ^
163 |         this.addOrModifyType = true
164 |         this.choseLabel(value)
165 |     },//选择进行修改标签


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:166:5:
164 |         this.choseLabel(value)
165 |     },//选择进行修改标签
> 166 |     showModify(){
    |     ^
167 |         this.showModifyFlag = true
168 |     },//显示修改框
169 |     init(){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:169:5:
167 |         this.showModifyFlag = true
168 |     },//显示修改框
> 169 |     init(){
    |     ^
170 |         this.labelsList = labelsListModel.fetch() 
171 |         let index = this.index
172 |         for(let i = 0;i<this.labelsList[index].length;i++){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:176:5:
174 |         }
175 |     },//页面获取时。初始化标签列表
> 176 |     modifyOrAddInData(object){
    |     ^
177 |         if(this.addOrModifyType){
178 |             let index = this.index
179 |             this.labelsList[index][object.id] = object


warning: Argument 'object' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:176:23:
174 |         }
175 |     },//页面获取时。初始化标签列表
> 176 |     modifyOrAddInData(object){
    |                       ^
177 |         if(this.addOrModifyType){
178 |             let index = this.index
179 |             this.labelsList[index][object.id] = object


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:221:5:
219 |
220 |     },//存储修改或添加的标签信息至model的data     
> 221 |     showDelete(){
    |     ^
222 |         this.showModifyFlag = false
223 |     },//显示删除框
224 |     timeStart(label){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:224:5:
222 |         this.showModifyFlag = false
223 |     },//显示删除框
> 224 |     timeStart(label){
    |     ^
225 |         this.timer = true
226 |         setTimeout(() => {
227 |             if(this.timer){


warning: Argument 'label' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:224:15:
222 |         this.showModifyFlag = false
223 |     },//显示删除框
> 224 |     timeStart(label){
    |               ^
225 |         this.timer = true
226 |         setTimeout(() => {
227 |             if(this.timer){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:235:5:
233 |         }, 200)
234 |     },
> 235 |     timeEnd(){
    |     ^
236 |         setTimeout(() => {
237 |             this.timer = false
238 |         }, 100);


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:240:5:
238 |         }, 100);
239 |     },//长按选择删除标签的辅助方法
> 240 |     choseDeleteLabel(value){
    |     ^
241 |         if(value.deleteFlag === true && value.activeFlag === true){
242 |             value.deleteFlag = false
243 |             value.activeFlag = false


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:240:22:
238 |         }, 100);
239 |     },//长按选择删除标签的辅助方法
> 240 |     choseDeleteLabel(value){
    |                      ^
241 |         if(value.deleteFlag === true && value.activeFlag === true){
242 |             value.deleteFlag = false
243 |             value.activeFlag = false


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:252:5:
250 |         }
251 |     },//长按选择删除标签的方法
> 252 |     deleteIdListAdd(id){
    |     ^
253 |         if(this.deleteIdList.indexOf(id) === -1){ 
254 |             this.deleteIdList.push(id)
255 |             this.deleteIdList.sort()


warning: Argument 'id' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:252:21:
250 |         }
251 |     },//长按选择删除标签的方法
> 252 |     deleteIdListAdd(id){
    |                     ^
253 |         if(this.deleteIdList.indexOf(id) === -1){ 
254 |             this.deleteIdList.push(id)
255 |             this.deleteIdList.sort()


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:258:5:
256 |         }
257 |     },//向删除标签的id列表添加
> 258 |     deleteIdListRemove(id){
    |     ^
259 |         if(this.deleteIdList.indexOf(id)||this.deleteIdList.indexOf(id) === 0){
260 |             if(this.deleteIdList.length>1){       
261 |                 this.deleteIdList.splice(this.deleteIdList.indexOf(id),1)


warning: Argument 'id' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:258:24:
256 |         }
257 |     },//向删除标签的id列表添加
> 258 |     deleteIdListRemove(id){
    |                        ^
259 |         if(this.deleteIdList.indexOf(id)||this.deleteIdList.indexOf(id) === 0){
260 |             if(this.deleteIdList.length>1){       
261 |                 this.deleteIdList.splice(this.deleteIdList.indexOf(id),1)


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:267:5:
265 |         }
266 |     },//删除标签的id列表中，指定的id
> 267 |     deleteIdListInit(){
    |     ^
268 |         for(let i=0;i<this.labelsList[0].length;i++){
269 |             this.labelsList[0][i].activeFlag = false
270 |             this.labelsList[0][i].deleteFlag = false


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:280:5:
278 |         this.showModifyFlag = false
279 |     },//取消删除的重置标签方法
> 280 |     beTrueDelete(){
    |     ^
281 |         let index = this.index
282 |         for(let i=0;i<this.labelsList[index].length;i++){
283 |             if(this.deleteIdList.indexOf(this.labelsList[index][i].id)!==-1){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:294:5:
292 |         labelsListModel.save(this.labelsList)     
293 |     },//删除标签的方法
> 294 |     choseAddLabel(value){
    |     ^
295 |         this.addOrModifyType = false
296 |         this.choseLabel(value)
297 |     },//选择进行添加标签


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:294:19:
292 |         labelsListModel.save(this.labelsList)     
293 |     },//删除标签的方法
> 294 |     choseAddLabel(value){
    |                   ^
295 |         this.addOrModifyType = false
296 |         this.choseLabel(value)
297 |     },//选择进行添加标签


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:299:5:
297 |     },//选择进行添加标签
298 |
> 299 |     setHref(value){
    |     ^
300 |         this.modifyLabel.href = value
301 |     },//提供给修改标签的组件用于获取修改后的href  
302 |     setText(value){


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:299:13:
297 |     },//选择进行添加标签
298 |
> 299 |     setHref(value){
    |             ^
300 |         this.modifyLabel.href = value
301 |     },//提供给修改标签的组件用于获取修改后的href  
302 |     setText(value){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:302:5:
300 |         this.modifyLabel.href = value
301 |     },//提供给修改标签的组件用于获取修改后的href  
> 302 |     setText(value){
    |     ^
303 |         this.modifyLabel.text = value
304 |     },//提供给修改标签的组件用于获取修改后的text  
305 |     modify(){


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:302:13:
300 |         this.modifyLabel.href = value
301 |     },//提供给修改标签的组件用于获取修改后的href  
> 302 |     setText(value){
    |             ^
303 |         this.modifyLabel.text = value
304 |     },//提供给修改标签的组件用于获取修改后的text  
305 |     modify(){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:305:5:
303 |         this.modifyLabel.text = value
304 |     },//提供给修改标签的组件用于获取修改后的text  
> 305 |     modify(){
    |     ^
306 |         if(this.chosedLabel.href === this.modifyLabel.href && this.chosedLabel.text === this.modifyLabel.text){
307 |             alert('标签未做修改~')
308 |             return


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:329:5:
327 |         this.modifyOrAddInData(this.chosedLabel)  
328 |     },//确定修改后，将被选中的标签的内容更改为修改
的标签内容
> 329 |     modifyInit(){
    |     ^
330 |         this.modifyLabel.href = this.chosedLabel.href
331 |         this.modifyLabel.text = this.chosedLabel.text
332 |     },//修改标签初始化


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:333:5:
331 |         this.modifyLabel.text = this.chosedLabel.text
332 |     },//修改标签初始化
> 333 |     iconListInit(){
    |     ^
334 |         IconListModel.init()
335 |         this.iconList = IconListModel.data        
336 |     },//图标列表初始化


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:337:5:
335 |         this.iconList = IconListModel.data        
336 |     },//图标列表初始化
> 337 |     choseIcon(label){
    |     ^
338 |         this.setHref(label.href)
339 |         for(let i=0;i<this.iconList.length;i++){  
340 |             if(this.iconList[i].href === label.href){


warning: Argument 'label' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:337:15:
335 |         this.iconList = IconListModel.data        
336 |     },//图标列表初始化
> 337 |     choseIcon(label){
    |               ^
338 |         this.setHref(label.href)
339 |         for(let i=0;i<this.iconList.length;i++){  
340 |             if(this.iconList[i].href === label.href){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:348:1:
346 |     },//·控制图标列表的高亮
347 | },
> 348 | mounted(){
    | ^
349 |     this.init()
350 | },
351 | watch:{


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:352:5:
350 | },
351 | watch:{
> 352 |     deleteIdList(){
    |     ^
353 |         if(this.deleteIdList.length === 0){       
354 |             this.showDeleteFlag = false
355 |         }//当删除标签的ID列表中为空，解除删除状态 


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:357:5:
355 |         }//当删除标签的ID列表中为空，解除删除状态 
356 |     },
> 357 |     type(){
    |     ^
358 |         this.deleteIdListInit()
359 |     },
360 |     chosedLabel(){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:360:5:
358 |         this.deleteIdListInit()
359 |     },
> 360 |     chosedLabel(){
    |     ^
361 |         this.modifyInit()
362 |     },
363 |     modifyLabel:{


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Label\Label.vue:365:9:
363 |     modifyLabel:{
364 |         deep:true,
> 365 |         handler(){
    |         ^
366 |             for(let i=0;i<this.iconList.length;i++){
367 |                 if(this.iconList[i].href === this.modifyLabel.href){
368 |                     this.iconList[i].activeFlag = 
false


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:61:5:
59 | export default {
60 |     name:'Money',
> 61 |     data(){
   |     ^
62 |         return{
63 |             type:'支出',//决定当前账单的支出与收入 
类型
64 |             amount: '0',//当前账单的记账金额       


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:84:9:
82 |     },
83 |     methods:{
> 84 |         keysDown(keyText){
   |         ^
85 |             if('01234567890.'.indexOf(keyText) >=0){
86 |                 if(this.amount.length === 8 ){     
87 |                     return


warning: Argument 'keyText' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:84:18:
82 |     },
83 |     methods:{
> 84 |         keysDown(keyText){
   |                  ^
85 |             if('01234567890.'.indexOf(keyText) >=0){
86 |                 if(this.amount.length === 8 ){     
87 |                     return


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:126:9:
124 |             }
125 |         },//Bottom - 输入键盘
> 126 |         changeType(){
    |         ^
127 |             if(this.type === '支出'){
128 |                 this.type = '收入'
129 |                 return


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:138:9:
136 |             }
137 |         },//Top - 选择支出收入
> 138 |         getNote(value){
    |         ^
139 |             this.note = value
140 |         },//Bottom - 获取备注
141 |         choseLabel(value){


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:138:17:
136 |             }
137 |         },//Top - 选择支出收入
> 138 |         getNote(value){
    |                 ^
139 |             this.note = value
140 |         },//Bottom - 获取备注
141 |         choseLabel(value){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:141:9:
139 |             this.note = value
140 |         },//Bottom - 获取备注
> 141 |         choseLabel(value){
    |         ^
142 |             for(let i = 0;i<this.labelList.length;i++){
143 |                 this.labelList[i].activeFlag = false
144 |             }


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:141:20:
139 |             this.note = value
140 |         },//Bottom - 获取备注
> 141 |         choseLabel(value){
    |                    ^
142 |             for(let i = 0;i<this.labelList.length;i++){
143 |                 this.labelList[i].activeFlag = false
144 |             }


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:147:9:
145 |             value.activeFlag = true
146 |         },//CenterLabel - 选择记账标签
> 147 |         getTime(){
    |         ^
148 |             let date0 = new Date()
149 |             let date = date0.toString()
150 |             let arr = date.trim().split(' ')      


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:179:9:
177 |             return id
178 |         },//获取当前时间
> 179 |         setTime(time,type){
    |         ^
180 |             if(time==='year'){
181 |                 this.yearChange(type)
182 |             }else if(time==='month'){


warning: Argument 'time' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:179:17:
177 |             return id
178 |         },//获取当前时间
> 179 |         setTime(time,type){
    |                 ^
180 |             if(time==='year'){
181 |                 this.yearChange(type)
182 |             }else if(time==='month'){


warning: Argument 'type' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:179:22:
177 |             return id
178 |         },//获取当前时间
> 179 |         setTime(time,type){
    |                      ^
180 |             if(time==='year'){
181 |                 this.yearChange(type)
182 |             }else if(time==='month'){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:188:9:
186 |             }
187 |         },
> 188 |         yearChange(type){
    |         ^
189 |             if(type){//增加
190 |                 this.year++
191 |             }else{//减少


warning: Argument 'type' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:188:20:
186 |             }
187 |         },
> 188 |         yearChange(type){
    |                    ^
189 |             if(type){//增加
190 |                 this.year++
191 |             }else{//减少


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:200:9:
198 |             }
199 |         },
> 200 |         monthChange(type){
    |         ^
201 |             if(type && this.month<=12){
202 |                 if(this.month<12){
203 |                     this.month++


warning: Argument 'type' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:200:21:
198 |             }
199 |         },
> 200 |         monthChange(type){
    |                     ^
201 |             if(type && this.month<=12){
202 |                 if(this.month<12){
203 |                     this.month++


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:217:9:
215 |             }
216 |         },
> 217 |         dayChange(type){
    |         ^
218 |             let max
219 |             if([1,3,5,7,8,10,12].indexOf(this.month)!==-1){
220 |                 max = 31


warning: Argument 'type' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:217:19:
215 |             }
216 |         },
> 217 |         dayChange(type){
    |                   ^
218 |             let max
219 |             if([1,3,5,7,8,10,12].indexOf(this.month)!==-1){
220 |                 max = 31


error: Expected a conditional expression and instead saw an assignment (no-cond-assign) at src\components\Money\Money.vue:230:30:
228 |                     if(this.day<max){
229 |                         this.day++
> 230 |                     }else if(this.day = max){   
    |                              ^
231 |                         this.day = 1
232 |                     }
233 |                 }


error: Expected a conditional expression and instead saw an assignment (no-cond-assign) at src\components\Money\Money.vue:238:30:
236 |                     if(this.day>1){
237 |                         this.day--
> 238 |                     }else if(this.day=1){       
    |                              ^
239 |                         this.day = max
240 |                     }
241 |


error: Unexpected constant condition (no-constant-condition) at src\components\Money\Money.vue:238:30:
236 |                     if(this.day>1){
237 |                         this.day--
> 238 |                     }else if(this.day=1){       
    |                              ^
239 |                         this.day = max
240 |                     }
241 |


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:245:9:
243 |             }
244 |         },
> 245 |         okay(){
    |         ^
246 |             let data = {}
247 |
248 |                 //账单类型


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:316:9:
314 |             alert('记完一笔咯~')
315 |         },//bottom - 提交单笔账单
> 316 |         init(){
    |         ^
317 |             this.type = "支出"
318 |             this.amount = "0"
319 |             this.note = ''


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:324:9:
322 |             }
323 |         },//提交单笔账单后初始化
> 324 |         labelsInit(){
    |         ^
325 |             if(this.type === '支出'){
326 |                 this.labelList = labelList.fetch()[0]
327 |             }


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:332:9:
330 |             }
331 |         },//重置列表
> 332 |         setAccountBook(value){
    |         ^
333 |             this.accountBook = value
334 |         },//选择账本
335 |         getAccountBook(){


warning: Argument 'value' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:332:24:
330 |             }
331 |         },//重置列表
> 332 |         setAccountBook(value){
    |                        ^
333 |             this.accountBook = value
334 |         },//选择账本
335 |         getAccountBook(){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:335:9:
333 |             this.accountBook = value
334 |         },//选择账本
> 335 |         getAccountBook(){
    |         ^
336 |             if(accountBookListModel.fetch()){     
337 |                 this.accountBookList = accountBookListModel.fetch()
338 |             }else{


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:345:9:
343 |     },
344 |     watch:{
> 345 |         type(){
    |         ^
346 |             this.labelsInit()
347 |         },
348 |     },


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Money\Money.vue:349:5:
347 |         },
348 |     },
> 349 |     mounted(){
    |     ^
350 |         this.labelsInit()
351 |         this.getTime()
352 |         this.getAccountBook()


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Layout.vue:23:5:
21 | export default {
22 | name:'Layout',
> 23 |     data(){
   |     ^
24 |         return{
25 |             navFlag: false,
26 |             startX: 0,


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Layout.vue:37:9:
35 |     },
36 |     methods:{
> 37 |         touchstart(e){
   |         ^
38 |             this.startX = e.changedTouches[0].clientX
39 |         },
40 |         touchend(e){


warning: Argument 'e' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Layout.vue:37:20:
35 |     },
36 |     methods:{
> 37 |         touchstart(e){
   |                    ^
38 |             this.startX = e.changedTouches[0].clientX
39 |         },
40 |         touchend(e){


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Layout.vue:40:9:
38 |             this.startX = e.changedTouches[0].clientX
39 |         },
> 40 |         touchend(e){
   |         ^
41 |             this.endX = e.changedTouches[0].clientX42 |             if(this.startX - this.endX >= 100){    
43 |                 this.navFlag = true


warning: Argument 'e' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Layout.vue:40:18:
38 |             this.startX = e.changedTouches[0].clientX
39 |         },
> 40 |         touchend(e){
   |                  ^
41 |             this.endX = e.changedTouches[0].clientX42 |             if(this.startX - this.endX >= 100){    
43 |                 this.navFlag = true


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Navigation.vue:45:5:
43 | export default {
44 |     name:'Navigation',
> 45 |     data(){
   |     ^
46 |         return{
47 |             topIcon:[
48 |                 {


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Navigation.vue:80:9:
78 |     },
79 |     watch:{
> 80 |         $route(to,from){
   |         ^
81 |             for(let i = 0;i<this.topIcon.length; i++){
82 |                 if(this.topIcon[i].to === to.path){83 |                     this.topIcon[i].activeFlag = true


warning: Argument 'to' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Navigation.vue:80:16:
78 |     },
79 |     watch:{
> 80 |         $route(to,from){
   |                ^
81 |             for(let i = 0;i<this.topIcon.length; i++){
82 |                 if(this.topIcon[i].to === to.path){83 |                     this.topIcon[i].activeFlag = true


warning: Argument 'from' should be typed (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Navigation.vue:80:19:
78 |     },
79 |     watch:{
> 80 |         $route(to,from){
   |                   ^
81 |             for(let i = 0;i<this.topIcon.length; i++){
82 |                 if(this.topIcon[i].to === to.path){83 |                     this.topIcon[i].activeFlag = true


warning: Missing return type on function (@typescript-eslint/explicit-module-boundary-types) at src\components\Views\Navigation.vue:100:5:
 98 |         },
 99 |     },
> 100 |     mounted(){
    |     ^
101 |         for(let i = 0;i<this.topIcon.length;i++){ 
102 |             if(this.topIcon[i].to === this.$route.path){
103 |                 this.topIcon[i].activeFlag = true 


3 errors and 118 warnings found.

pre-commit hook failed (add --no-verify to bypass)