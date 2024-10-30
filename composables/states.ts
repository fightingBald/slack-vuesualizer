import type { Dm } from '~/types/Dm'
import type { Channel } from '~~/types/Channel'
import type { User } from '~~/types/User'


//定义了一个名为 useUsers 的 组合式函数（Composable）。

export const useUsers = () => useState<User[]>('users', () => [])
/*
这里定义了一个常量 useUsers，并赋值为一个箭头函数 () =>。这个函数在调用时返回的是 useState 的结果。

useUsers 本身是一个 函数，它没有参数，并且返回值来自 useState。
User[] 表示这个状态的类型是一个 User 对象的数组。

*/
/*
useState<T>(key, factory)：这是 useState 函数的基本签名。它接收两个参数：
T：一个可选的泛型参数，指定状态的数据类型。
key：一个字符串，用来标识状态的唯一键。
factory：一个函数，用来定义状态的初始值。



() => []
这是传递给 useState 的第二个参数，它是一个返回空数组的 工厂函数。
工厂函数 的作用是定义状态的初始值，在这里 () => [] 表示初始状态是一个空数组。
*/
