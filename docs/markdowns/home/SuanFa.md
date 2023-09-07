# 数据结构与算法

## 时间复杂度

**执行当前算法需要消耗多少时间**

![image-20230804162646290](C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230804162646290.png)

## 空间复杂度

**执行当前算法需要占用多少内存空间**

O(1)：无循环嵌套

O(n^\*)：循环嵌套

O(logN):![image-20230802104052797](C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230802104052797.png)

![image-20230804163013426](C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230804163013426.png)

![image-20230804163020774](C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230804163020774.png)

## 栈

先进后出：push --> pop

### 20. 有效的括号

> 给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。
>
> 有效字符串需满足：
>
> 1. 左括号必须用相同类型的右括号闭合。
> 2. 左括号必须以正确的顺序闭合。
> 3. 每个右括号都有一个对应的相同类型的左括号。

```js
/**
 * @param {string} s
 * @return {boolean}
 *
 * 1.判断字符串长度是否为复数，否则直接返回false
 * 2.遍历字符串，如果为左括号就入栈，否则就和当前栈最后一个左括号进行匹配，匹配成功就删除上一位（出栈）且当前位不作入栈处理
 * 3.如果最后栈无剩余元素，则返回true
 */
var isValid = function (s) {
  var stack = [];
  if (s.length % 2 != 0) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      const start = s[i];
      if (start == "(" || start == "{" || start == "[") {
        stack.push(start);
      } else {
        const end = stack[stack.length - 1];
        if (
          (start == ")" && end == "(") ||
          (start == "}" && end == "{") ||
          (start == "]" && end == "[")
        ) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length == 0;
  }
};
```

### 1047. 删除字符串中的所有相邻重复项

> 给出由小写字母组成的字符串 `S`，**重复项删除操作**会选择两个相邻且相同的字母，并删除它们。
>
> 在 S 上反复执行重复项删除操作，直到无法继续删除。
>
> 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

```js
/**
 * @param {string} s
 * @return {string}
 *
 * 1.遍历字符串，遇到和上一位不同的就入栈，相同则删除上一位（出栈）
 * 2.以“”为连接，返回栈字符串
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (v of s) {
    if (v == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(v);
    }
  }
  return stack.join("");
};
```

### 71.简化路径

> 给你一个字符串 `path` ，表示指向某一文件或目录的 Unix 风格 **绝对路径** （以 `'/'` 开头），请你将其转化为更加简洁的规范路径。
>
> 在 Unix 风格的文件系统中，一个点（`.`）表示当前目录本身；此外，两个点 （`..`） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，`'//'`）都被视为单个斜杠 `'/'` 。 对于此问题，任何其他格式的点（例如，`'...'`）均被视为文件/目录名称。
>
> 请注意，返回的 **规范路径** 必须遵循下述格式：
>
> - 始终以斜杠 `'/'` 开头。
> - 两个目录名之间必须只有一个斜杠 `'/'` 。
> - 最后一个目录名（如果存在）**不能** 以 `'/'` 结尾。
> - 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 `'.'` 或 `'..'`）。
>
> 返回简化后得到的 **规范路径**

```js
/**
 * @param {string} path
 * @return {string}
 *
 * 1.以”/“为标识拆开字符串
 * 2.遍历拆解数组，需先判断v不为空，遇到”..“就删除上一位（出栈），遇到”.“就跳过，其余加入栈
 * 3.以“/”为连接，返回栈字符串，并在开头接上一个“/”
 */
var simplifyPath = function (path) {
  let stack = [];
  let str = "";
  let arr = path.split("/");
  arr.forEach((v) => {
    if (v && v == "..") {
      stack.pop();
    } else if (v && v != ".") {
      stack.push(v);
    }
  });
  arr.length ? (str = "/" + stack.join("/")) : (str = "/");
  return str;
};
```

## 队列

先进先出：push --> shift

### 933. 最近的请求次数

> 写一个 `RecentCounter` 类来计算特定时间范围内最近的请求。
>
> 请你实现 `RecentCounter` 类：
>
> - `RecentCounter()` 初始化计数器，请求数为 0 。
> - `int ping(int t)` 在时间 `t` 添加一个新请求，其中 `t` 表示以毫秒为单位的某个时间，并返回过去 `3000` 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 `[t-3000, t]` 内发生的请求数。
>
> **保证** 每次对 `ping` 的调用都使用比之前更大的 `t` 值。

```js
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
/*
 * 1.确定范围
 * 2.根据范围判断是否删除队列第一个元素
 * 3.返回剩下队列长度
 */
var RecentCounter = function () {
  this.stack = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.stack.push(t);
  while (this.stack[0] < t - 3000) {
    this.stack.shift();
  }
  return this.stack.length;
};
```

## 链表

<img src="C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230802145623174.png" alt="image-20230802145623174" style="zoom:67%;" />

1. 多个元素存储的列表。
2. 链表中的元素在内存中不是顺序存储的，而是通过“next”指针联系在一起的。
3. js 中原型链的原理就是链表结构。

> 手写简易 instanceof

```js
const instanceofs = (target, obj) => {
  let p = target;
  while (p) {
    if (p == obj.prototype) {
      return true;
    }
    p = p.__proto__;
  }
};

instanceofs([1, 2, 3], Object);
```

### 141. 环形链表

> 给你一个链表的头节点 `head` ，判断链表中是否有环。
>
> 如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。
>
> _如果链表中存在环_ ，则返回 `true` 。 否则，返回 `false` 。

```js
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 标记法，判断是否已经遍历过
var hasCycle = function (head) {
  while (head) {
    if (head.tag) {
      return true;
    }
    head.tag = true;
    head = head.next;
  }
  return false;
};

// 快慢指针法，判断两个指针是否会再次相遇
var hasCycle = function (head) {
  let f = head,
    s = head;
  while (f !== null && f.next != null) {
    s = s.next;
    f = f.next.next;
    if (s == f) return true;
  }
  return false;
};
```

### 237. 删除链表中的节点

> 有一个单链表的 `head`，我们想删除它其中的一个节点 `node`。
>
> 给你一个需要删除的节点 `node` 。你将 **无法访问** 第一个节点 `head`。
>
> 链表的所有值都是 **唯一的**，并且保证给定的节点 `node` 不是链表中的最后一个节点。
>
> 删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：
>
> - 给定节点的值不应该存在于链表中。
> - 链表中的节点数应该减少 1。
> - `node` 前面的所有值顺序相同。
> - `node` 后面的所有值顺序相同。
>
> **自定义测试：**
>
> - 对于输入，你应该提供整个链表 `head` 和要给出的节点 `node`。`node` 不应该是链表的最后一个节点，而应该是链表中的一个实际节点。
> - 我们将构建链表，并将节点传递给你的函数。
> - 输出将是调用你函数后的整个链表。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 *
 * 直接跳过删除位，将当前链位接到下下一位
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
```

### 83. 删除排序链表中的重复元素

> 给定一个已排序的链表的头 `head` ， _删除所有重复的元素，使每个元素只出现一次_ 。返回 _已排序的链表_ 。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1.先判断是否为空链
 * 2.遇到重复则将当前位置接到下下位
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let cur = head;
  while (cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};
```

### 206.翻转列表

> 给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 1.设置两个容器，prev代表上一位，cur表示当前位，next表示下一位
 * 2.将当前位cur指向上一位，实现翻转，然后cur向前移动到下一位，反复操作
 * 3.最后cur为空，prev完成全部拼接
 */
var reverseList = function (head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    // 向前推进
    prev = cur;
    cur = next;
  }
  return prev;
};
```

## 字典和哈希表

<img src="C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230802150722038.png" alt="image-20230802150722038" style="zoom:60%;" />

> 手写实现简易哈希表

```js
class HashTable {
  constructor() {
    this.table = [];
  }
  hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
  }
  put(key, val) {
    let hashKey = this.hashCode(key);
    this.table[hashKey] = val;
  }
  get(key, val) {
    let hashKey = this.hashCode(key);
    return this.table[hashKey];
  }
}

let hashTable = new HashTable();
hashTable.put("person", "张三");
console.log(hashTable);
console.log(hashTable.get("person"));
```

### 1.两数之和

> 给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** _`target`_ 的那 **两个** 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * 1.遍历数组，将数组中的每个数为键、下标为值，设置在map中
 * 2.如果在map中发现有键 = 目标和 - 当前数，则返回当前数的下标和键对应的值
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(nums[i], i);
  }
};
```

### 217. 存在重复元素

> 给你一个整数数组 `nums` 。如果任一值在数组中出现 **至少两次** ，返回 `true` ；如果数组中每个元素互不相同，返回 `false` 。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
// 使用Map方法
var containsDuplicate = function (nums) {
  let map = new Map();
  for (v of nums) {
    if (map.has(v)) {
      return true;
    }
    map.set(v, 1);
  }
  return false;
};

// 使用Set方法
var containsDuplicate = function (nums) {
  let set = new Set();
  for (v of nums) {
    if (set.has(v)) {
      return true;
    }
    set.add(v);
  }
  return false;
};
```

### 349.两个数组的交集

> 给定两个数组 `nums1` 和 `nums2` ，返回 _它们的交集_ 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * 1.利用Set来对原数组进行去重
 * 2.利用拓展运算符将Set转数组格式
 * 3.利用filter来进行筛选
 */
var intersection = function (nums1, nums2) {
  let set = new Set(nums2);
  return [...new Set(nums1)].filter((v) => set.has(v));
};
```

### 1207. 独一无二的出现次数

> 给你一个整数数组 `arr`，请你帮忙统计数组中每个数的出现次数。
>
> 如果每个数的出现次数都是独一无二的，就返回 `true`；否则返回 `false`。

```js
/**
 * @param {number[]} arr
 * @return {boolean}
 *
 * 1.利用Map对数组元素出现次数进行统计
 * 2.利用Set对统计出来的次数进行去重
 * 3.判断Set和Map的长度是否一致，一致则表示每个数出现的次数独一无二
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  for (let v of arr) {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  }
  const set = new Set();
  for (let [key, value] of map) {
    set.add(value);
  }
  return set.size == map.size;
};
```

### 3.无重复字符的最长子串

> 给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

```js
/**
 * @param {string} s
 * @return {number}
 *
 * 1.右指针逐步往右移动，且用sum记录相对移动距离
 * 2.左指针跟着往左移动，遇到相同相同字符时，更新left初始位置，且更新sum
 * 3.使用max来记录每次最大的相对距离，即表示无重复字符的最长子串的长度
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0; // 左指针，表示当前无重复子串的起始位置
  let right = 0; // 右指针，表示当前无重复子串的结束位置的下一个位置
  let sum = 0; // 当前无重复子串的长度
  let max = 0; // 最长无重复子串的长度

  while (right < s.length) {
    // 循环遍历整个字符串
    for (let i = left; i < right; i++) {
      // 在当前无重复子串中查找是否有与右指针指向字符相同的字符
      if (s[i] == s[right]) {
        // 如果找到相同字符
        left = i + 1; // 更新左指针为相同字符的下一个位置
        sum = right - left; // 更新当前无重复子串的长度
        break; // 跳出循环
      }
    }

    right++; // 右指针向右移动一位
    sum++; // 当前无重复子串的长度加一
    max = Math.max(sum, max); // 更新最长无重复子串的长度
  }
  return max; // 返回最长无重复子串的长度
};
```

```js
/**
 * @param {string} s
 * @return {number}
 *
 * 利用set原理，模仿滑动窗口，找到set.size和窗口尺寸一致的数值
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let set1 = new Set(s);
  for (let i = set1.size; i > 0; i--) {
    for (let l = 0; l < s.length; l++) {
      let set2 = new Set(s.substring(l, l + i));
      if (set2.size == i) {
        return set2.size;
      }
    }
  }
};
```

```js
/**
 * @param {string} s
 * @return {number}
 * 
 * 同理第一种
创建一个 Map 对象 map，用于存储字符和其在字符串中的索引。
创建两个变量 l 和 num，分别表示当前无重复子串的起始位置和最长无重复子串的长度，初始值都设为 0。
使用循环遍历字符串 s 的每个字符：
如果 map 中已经存在当前字符，并且其索引大于等于 l（即在当前无重复子串范围内），说明出现了重复字符。
更新 l 为重复字符的下一个位置（将 l 更新为当前字符 s[i] 上一次出现的位置的下一个位置），以保证新的无重复子串的起始位置。
计算当前无重复子串的长度，即 i + 1 - l，并将其与 num 进行比较，取较大值。
将当前字符及其索引存入 map 中，用于后续判断重复字符。
循环结束后，num 即为给定字符串中的最长无重复子串的长度。
返回 num。
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let l = 0;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      l = map.get(s[i]) + 1;
    }
    num = Math.max(num, i + 1 - l);
    map.set(s[i], i);
  }
  return num;
};
```

## 树

   <img src="C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230803102726860.png" alt="image-20230803102726860" style="zoom:67%;" />

```js
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "c",
          children: [],
        },
        {
          val: "d",
          children: [],
        },
      ],
    },
    {
      val: "b1",
      children: [
        {
          val: "c1",
          children: [],
        },
        {
          val: "d1",
          children: [],
        },
      ],
    },
  ],
};

// 深度遍历,逐步访问子节点
const fun1 = (root) => {
  console.log(root.val);
  // root.children.forEach(item=>fun1(item))
  root.children.forEach(fun1);
};
fun1(tree);

// 广度遍历，先输出每一层的父节点（定义队列，输出完后利用shift来删除，然后再递归该父节点的子节点）
const fun2 = (root) => {
  const arr = [root];
  while (arr.length > 0) {
    const o = arr.shift();
    console.log(o.val);
    o.children.forEach((item) => {
      arr.push(item);
    });
  }
};
fun2(tree);
```

### 144.二叉树的前序遍历

> 给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。
>
> 前序遍历：根 --> 左 --> 右

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放遍历结果
 * 递归时先存放当前层的父节点
 * 然后递归左节点，最后递归右节点
 */
var preorderTraversal = function (root) {
  let arr = [];
  var fun = (node) => {
    if (node) {
      arr.push(node.val);
      fun(node.left);
      fun(node.right);
    }
  };
  fun(root);
  return arr;
};

// 非递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放最终结果,栈stack存放倒序的遍历结果
 * 通过stack的逐步拆解缩短，即每次去掉父节点，逐步替换为右和左节点
 * arr每次获取stack最后一位，最终实现arr将stack倒序遍历
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let arr = [];
  let stack = [root];
  while (stack.length) {
    let o = stack.pop();
    arr.push(o.val);
    o.right && stack.push(o.right);
    o.left && stack.push(o.left);
  }
  return arr;
};
```

### 94.二叉树的中序遍历

> 给定一个二叉树的根节点 `root` ，返回 _它的 **中序** 遍历_ 。
>
> 前序遍历：左 --> 根 --> 右

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放遍历结果
 * 先递归左节点
 * 再存放当前层的父节点
 * 最后递归右节点
 */
var inorderTraversal = function (root) {
  let arr = [];
  const fun = (node) => {
    if (node) {
      fun(node.left);
      arr.push(node.val);
      fun(node.right);
    }
  };
  fun(root);
  return arr;
};

// 非递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放最终结果,o存放当前剩余节点，栈stack存放节点的遍历结果
 * 先通过对o的左节点进行循环遍历，存放到stack中
 * 再对stack进行pop，取出栈从后往前，然后将所得的节点存到arr
 * 最后通过o = n.right来重复上诉操作，开始遍历右节点中的子节点
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  let arr = [];
  let stack = [];
  let o = root;
  while (stack.length || o) {
    while (o) {
      stack.push(o);
      o = o.left;
    }
    const n = stack.pop();
    arr.push(n.val);
    o = n.right;
  }
  return arr;
};
```

### 145.二叉树的后序遍历

> 给定一个二叉树的根节点 `root` ，返回 _它的 **后序** 遍历_ 。
>
> 前序遍历：左 --> 右 --> 根

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放遍历结果
 * 先递归左节点
 * 再递归右节点
 * 最后存放当前层的父节点
 */
var postorderTraversal = function (root) {
  let arr = [];
  const fun = (node) => {
    if (node) {
      fun(node.left);
      fun(node.right);
      arr.push(node.val);
    }
  };
  fun(root);
  return arr;
};

// 非递归版
/**
 * @param {TreeNode} root
 * @return {number[]}
 *
 * 定义列表arr存放最终结果,栈stack存放倒序的遍历结果
 * 通过stack的逐步拆解缩短，即每次去掉父节点，逐步替换为左和右节点
 * arr每次获取stack最后一位，但是从unshift左往右添加，最终实现arr将stack正序遍历
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let arr = [];
  let stack = [root];
  while (stack.length) {
    const o = stack.pop();
    arr.unshift(o.val);
    o.left && stack.push(o.left);
    o.right && stack.push(o.right);
  }
  return arr;
};
```

### 111.二叉树的最小深度

> 给定一个二叉树，找出其最小深度。
>
> 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
>
> **说明：**叶子节点是指没有子节点的节点。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 *
 * 定义stack来记录每层层级
 * 如果当前层无子节点，则返回当前层级（此时层级为最小值，否则不会无子节点）
 * 如果有则递归遍历
 */
var minDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]];
  while (stack.length) {
    const [o, n] = stack.shift();
    if (!o.left && !o.right) {
      return n;
    }
    if (o.left) stack.push([o.left, n + 1]);
    if (o.right) stack.push([o.right, n + 1]);
  }
};
```

### 104.二叉树的最大深度

> 给定一个二叉树 `root` ，返回其最大深度。
>
> 二叉树的 **最大深度** 是指从根节点到最远叶子节点的最长路径上的节点数。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 *
 * 第一层循环用来计算层级
 * 第二次循环用来拆解层级，去掉父层，添加子层，直到最后只留下子层
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [root];
  let num = 0;
  while (stack.length) {
    let len = stack.length;
    num++;
    while (len--) {
      const o = stack.shift();
      o.left && stack.push(o.left);
      o.right && stack.push(o.right);
    }
  }
  return num;
};
```

### 226.翻转二叉树

> 给你一棵二叉树的根节点 `root` ，翻转这棵二叉树，并返回其根节点。
>
> **示例 2：**
>
> ![img](C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\invert2-tree.jpg)
>
> ```
> 输入：root = [2,1,3]
> 输出：[2,3,1]
> ```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 *
 * 创建容器进行节点交换，并递归子节点
 */
var invertTree = function (root) {
  if (!root) return root;
  let tamp = root.left;
  root.left = root.right;
  root.right = tamp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
```

### 100.相同的树

> 给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。
>
> 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 递归判断子节点内容是否一致
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 直接判断两个数组对象是否一致
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};
```

## 堆

<img src="C:\Users\17232\Desktop\Markdown笔记\前端学习\数据结构与算法\image-20230803141731313.png" alt="image-20230803141731313" style="zoom:67%;" />

> 通过二叉堆计算：
>
> 左子节点 = 2 \* index + 1
>
> 右子节点 = 2 \* index + 2
>
> 父节点 = （index - 1) / 2

### 最小堆

```js
// 新插入的元素从最大子节点往上找，最终实现最小排最前，从小到大排序
class MinHeap {
  constructor() {
    this.heap = [];
  }
  //找到父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  //换位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  //上（前）移操作
  up(index) {
    //移动到0就不移动
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    //如果父元素大于当前元素，就开始移动
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.up(parentIndex);
    }
  }
  //获取左子节点
  getLeftIndex() {
    return index * 2 + 1;
  }
  //获取右子节点
  getRightIndex() {
    return index * 2 + 2;
  }
  //下（后）移操作
  dowm(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.dowm(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.dowm(rightIndex);
    }
  }
  //添加元素
  insert(value) {
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }
  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.dowm(0);
  }
  //获取堆顶
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

let arr = new MinHeap();
arr.insert(5);
arr.insert(4);
console.log(arr);
```

### 215. 数组中的第 K 个最大元素

> 给定整数数组 `nums` 和整数 `k`，请返回数组中第 `k` 个最大的元素。
>
> 请注意，你需要找的是数组排序后的第 `k` 个最大的元素，而不是第 `k` 个不同的元素。
>
> 你必须设计并实现时间复杂度为 `O(n)` 的算法解决此问题。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//最小堆
var findKthLargest = function (nums, k) {
  let arr = new MinHeap();
  nums.forEach((item) => {
    arr.insert(item);
    if (arr.size() > k) {
      arr.pop();
    }
  });
  return arr.peek();
};
// 新插入的元素从最大子节点往上找，最终实现最小排最前，从小到大排序
class MinHeap {
  constructor() {
    this.heap = [];
  }
  //找到父节点
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  //换位置
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  //上（前）移操作
  up(index) {
    //移动到0就不移动
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    //如果父元素大于当前元素，就开始移动
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.up(parentIndex);
    }
  }
  //获取左子节点
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  //获取右子节点
  getRightIndex(index) {
    return index * 2 + 2;
  }
  //下（后）移操作
  dowm(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.dowm(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.dowm(rightIndex);
    }
  }
  //添加元素
  insert(value) {
    this.heap.push(value);
    this.up(this.heap.length - 1);
  }
  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.dowm(0);
  }
  //获取堆顶
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

//js方法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};
```

## 排序算法

[排序可视化](https://visualgo.net/zh/sorting)

### 冒泡排序

> 从头开始，跟相邻元素两两比较交换，共执行 length 轮

```js
function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### 选择排序

> 每轮将未排序的最前面一位跟其后面所有元素进行比较，找出最小/大值的下标，然后交换位置，完成本次排序，然后循环执行 length-1 轮

```js
function sortMin(arr) {
  let minIndex = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    //跟i位后面所有元素进行比较，找出最小/大值的下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换位置
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
```

### 插入排序

> 1. 从第一个元素开始，该元素可以被认为已经被排序
> 2. 取出下一个元素，在已经排序号的序列中，从后往前扫描
> 3. 直到找到小于或者等于该元素的位置
> 4. 将该位置后面的所有已经排序的元素从后往前移动
> 5. 将该元素插入到该位置
> 6. 重复步骤（2-5）

```js
function insertSort(arr) {
  // 从第 2 个元素开始遍历序列
  for (let i = 1; i < arr.length; i++) {
    let target = arr[i]; //记录要插入的目标元素
    let j = i;
    //从 target 所在位置向前遍历，直至找到一个比目标元素小的元素，目标元素插入到该元素之后的位置
    while (j > 0 && arr[j - 1] > target) {
      //将前一个元素向后移动一个位置
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}
```

### 归并排序

> 将数组从中间切分，将分组里面的元素逐个匹配判断，并采用 shift 方法删去已经匹配成功元素，然后将返回值加入到 resultArr，最后合并上还没匹配的元素，循环执行下去，直到分组元素删除完毕。

```js
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let merge = function (leftArr, rightArr) {
    let resultArr = [];
    while (leftArr.length && rightArr.length) {
      resultArr.push(
        leftArr[0] <= rightArr[0] ? leftArr.shift() : rightArr.shift()
      );
    }
    return resultArr.concat(leftArr).concat(rightArr);
  };
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
```

### 快速排序

> 以中间节点为基准点，分组，递归遍历分组，比该节点大的值放到 right 数组中，否则放到 left 数组中，即从中间点开始排序

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let pivot = arr.splice(mid, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

## 分治问题

### 二分搜索

> 与中间值比较，然后判断，直到找到中间值等于目标值为止

```js
function search(arr, target) {
  let conut = 1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    //取出中间值
    let middle = Math.floor((start + end) / 2);
    let guess = arr[middle];
    if (guess == target) return middle;
    if (guess > target) {
      end = middle - 1;
    }
    if (guess < target) {
      //避免start = middle，陷入死循环
      start = middle + 1;
    }
    conut++;
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5];
```

### 374. 猜数字大小

> 猜数字游戏的规则如下：
>
> - 每轮游戏，我都会从 **1** 到 **_n_** 随机选择一个数字。 请你猜选出的是哪个数字。
> - 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
>
> 你可以通过调用一个预先定义好的接口 `int guess(int num)` 来获取猜测结果，返回值一共有 3 种可能的情况（`-1`，`1` 或 `0`）：
>
> - -1：我选出的数字比你猜的数字小 `pick < num`
> - 1：我选出的数字比你猜的数字大 `pick > num`
> - 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！`pick == num`
>
> 返回我选出的数字。

```js
/**
 * @param {number} n
 * @return {number}
 *
 * 二分搜索法
 * 与中间值比较，然后判断，直到找到中间值等于目标值为止
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 *
 * 递归解法
 */
var guessNumber = function (n) {
  const rec = (low, high) => {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return rec(mid + 1, high);
    } else {
      return rec(low, mid - 1);
    }
  };
  return rec(1, n);
};
```

### 169.多数元素

> 给定一个大小为 `n` 的数组 `nums` ，返回其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。
>
> 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

```JS
/**
 * @param {number[]} nums
 * @return {number}
 *
 * 通过不断中分，找出每一中数的出现次数
 */
var majorityElement = function(nums) {
    const countInRang = (start,end,num)=>{
        let count = 0;
        for(let i=start;i<=end;i++){
            if(nums[i] == num){
                count++;
            }
        }
        return count;
    }
    const majority = (start,end)=>{
        if(start == end) return nums[start];
        let mid = start + Math.floor((end-start)/2);
        const l = majority(start,mid);
        const r = majority(mid+1,end);
        if(l==r) return l;
        const l_cout = countInRang(start,end,l);
        const r_cout = countInRang(start,end,r);
        return l_cout > r_cout ? l:r;
    }
    return majority(0,nums.length-1)
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 利用map来统计出现次数
 * 通过次数判断map.get(num) > nums.length / 2来返回结果
 */
var majorityElement = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    const map = new Map();
    for (let num of nums) {
        if (!map.get(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
            if (map.get(num) > nums.length / 2) {
                return num;
            }
        }
    }
};
```

## 动态规划

### 70.爬楼梯

> 假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。
>
> 每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

```js
/**
 * @param {number} n
 * @return {number}
 * 斐波那契
 */
var climbStairs = function (n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

### 198.打家劫舍

> 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。
>
> 给定一个代表每个房屋存放金额的非负整数数组，计算你 **不触动警报装置的情况下** ，一夜之内能够偷窃到的最高金额。
>
> 1. 首先定义了一个函数 `rob`，它接受一个数组 `nums` 作为参数。
>
> 2. 使用 `const len = nums.length;` 获取数组的长度。
>
> 3. 如果数组长度为 0，说明没有房屋可偷，直接返回 0。
>
> 4. 如果数组长度为 1，说明只有一间房屋可偷，直接返回该房屋的价值。
>
> 5. 创建一个数组 `dp`，用于存储每个位置上的最大价值。初始时，`dp[0]` 设为 0（表示没有房屋可偷），`dp[1]` 设为第一间房屋的价值。
>
> 6. 使用循环从第二个位置开始遍历到最后一个位置（i=2;i<=len;i++）：
>
>    对于每个位置 i 计算当前位置的最大价值：dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1])
>
>    - `dp[i-1]` 表示不偷当前房屋，所以最大价值与前一个位置的最大价值相同。
>    - `dp[i-2] + nums[i-1]` 表示偷当前房屋，所以最大价值为前两个位置的最大价值加上当前房屋的价值。
>
> 7. 循环结束后，`dp[len]` 即为最后一个位置的最大价值，也就是整个数组中可以偷取的最大价值。
>
> 8. 返回 `dp[len]`。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len == 0) return 0;
  if (len == 1) return nums[0];
  const dp = [0, nums[0]];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
};
```

### 718.最长重复子数组

> 1. 首先定义了一个函数 `findLength`，它接受两个数组 `nums1` 和 `nums2` 作为参数，并返回一个数字。
>
> 2. 创建一个二维数组 `dp`，用于存储最长公共子数组的长度。数组的行数为 `A.length + 1`，列数为 `B.length + 1`。初始时，所有元素都设为 0。
>
> 3. 创建一个变量 `res`，用于记录最长公共子数组的长度。
>
> 4. 使用两层循环遍历数组
>
>    A 和 B 的每个元素：
>
>    - 外层循环控制 `A` 的索引，从 1 开始到 `A.length`。
>    - 内层循环控制 `B` 的索引，从 1 开始到 `B.length`。
>
> 5. 在循环中，判断当前元素是否相等：
>
>    - 如果 `A[i-1]` 等于 `B[j-1]`，说明当前元素可以包含在最长公共子数组中，所以将 `dp[i][j]` 设为 `dp[i-1][j-1] + 1`。
>    - 更新 `res`，取 `dp[i][j]` 和 `res` 中的较大值。
>
> 6. 循环结束后，`res` 即为两个数组的最长公共子数组的长度。
>
> 7. 返回 `res`

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = (A, B) => {
  let dp = Array.from(Array(A.length + 1), () => Array(B.length + 1).fill(0));
  let res = 0;
  // i=0或j=0的base case，初始化时已经包括
  for (let i = 1; i <= A.length; i++) {
    // 从1开始遍历
    for (let j = 1; j <= B.length; j++) {
      // 从1开始遍历
      if (A[i - 1] == B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      res = Math.max(dp[i][j], res);
    }
  }
  return res;
};
```

### 1143.最长公共子序列

> 1. 首先定义了一个函数 `longestCommonSubsequence`，它接受两个字符串 `text1` 和 `text2` 作为参数。
>
> 2. 创建一个二维数组 `dp`，用于存储最长公共子序列的长度。数组的行数为 `text1.length + 1`，列数为 `text2.length + 1`。初始时，所有元素都设为 0。
>
> 3. 使用两层循环遍历
>
>    text1 和 text2 的每个字符：
>
>    - 外层循环控制 `text1` 的索引，从 1 开始到 `text1.length`。
>    - 内层循环控制 `text2` 的索引，从 1 开始到 `text2.length`。
>
> 4. 在循环中，判断当前字符是否相等：
>
>    - 如果 `text1[i-1]` 等于 `text2[j-1]`，说明当前字符可以包含在最长公共子序列中，所以将 `dp[i][j]` 设为 `dp[i-1][j-1] + 1`。
>    - 如果 `text1[i-1]` 不等于 `text2[j-1]`，说明当前字符不能包含在最长公共子序列中，所以将 `dp[i][j]` 设为前一个位置的最大值，即 `Math.max(dp[i-1][j], dp[i][j-1])`。
>
> 5. 循环结束后，`dp[text1.length][text2.length]` 即为最长公共子序列的长度。
>
> 6. 返回 `dp[text1.length][text2.length]`。

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = Array.from(Array(text1.length + 1), () =>
    Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
```

## 贪心算法

### 55.跳跃游戏

> 给定一个非负整数数组 `nums` ，你最初位于数组的 **第一个下标** 。
>
> 数组中的每个元素代表你在该位置可以跳跃的最大长度。
>
> 判断你是否能够到达最后一个下标。

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 从起点出发，如果当前可跳格数cover能够大于到下一个格子距离，则进行跳跃
 * 跳跃到下一个格时，会计算新的最大cover
 * 如果最终可跳格数cover大于终点距离则返回true
 */
var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= cover) {
      cover = Math.max(nums[i] + i, cover);
      if (cover >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};
```

### 455.分发饼干

> 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
>
> 对每个孩子 `i`，都有一个胃口值 `g[i]`，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 `j`，都有一个尺寸 `s[j]` 。如果 `s[j] >= g[i]`，我们可以将这个饼干 `j` 分配给孩子 `i` ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 *
 * 先从小到大排序
 * 再遍历饼干，看当前饼干是否能满足当前孩子
 * 如果满足就num+1，不满足就找下一块饼干
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let num = 0;
  s.forEach((v) => {
    if (v >= g[num]) {
      num++;
    }
  });
  return num;
};
```

### 121.买股票的最佳时机

> 1. 首先定义了一个函数 `maxProfit`，它接受一个数组 `prices` 作为参数，并返回一个数字。
>
> 2. 创建一个变量 `min`，用于记录最低价格，初始值设为数组第一天的价格 `prices[0]`。
>
> 3. 创建一个变量 `profit`，用于记录最大利润，初始值设为 0。
>
> 4. 使用循环遍历数组
>
>    prices，从第二天开始（i = 1）到最后一天：
>
>    - 如果当前价格 `prices[i]` 比最低价格 `min` 还低，说明找到了一个更低的价格，更新 `min` 为当前价格。
>    - 如果当前价格与最低价格之间的差值比之前的最大利润还大，说明找到了一个更高的利润，更新 `profit` 为当前差值。
>
> 5. 循环结束后，`profit` 即为股票买卖的最大利润。
>
> 6. 返回 `profit`

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 先定义第一天为最低价格
  let min = prices[0];
  // 利润
  let profit = 0;
  // 遍历数据
  for (let i = 1; i < prices.length; i++) {
    // 如果发现比最低价格还低的，更新最低价格
    min = Math.min(min, prices[i]);
    // 如果发现当前利润比之前高的，更新利润
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};
```

### 122.买卖股票的最佳时机 II

> 给你一个整数数组 `prices` ，其中 `prices[i]` 表示某支股票第 `i` 天的价格。
>
> 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 **最多** 只能持有 **一股** 股票。你也可以先购买，然后在 **同一天** 出售。
>
> 返回 _你能获得的 **最大** 利润_ 。

```js
/**
 * @param {number[]} prices
 * @return {number}
 *
 * 找到后一天比前一天大的
 * 累加差值
 */
var maxProfit = function (prices) {
  let num = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      num += prices[i] - prices[i - 1];
    }
  }
  return num;
};
```
