JDBC速学
===
---
###### 练习数据库来源:[传送门](https://blog.csdn.net/qq_43567345/article/details/105661243)
---
### 一、认识JDBC
1. JDBC（Java DataBase Connectivity）是Java语言连接数据库
2. JDBC的本质
JDBC是由SUN公司制定的一套接口（interface）
接口都有调用者和实现者。
3. 什么是面向接口编程
    - 面向接口调用
    - 面向接口写实现类
4. 面向接口编程的特点
    - 解耦合：降低程序的耦合度，提高程序的扩展力

### 二、JDBC开发前的准备工作
1. 现在JDBC驱动jar包：[传送门](https://downloads.mysql.com/archives/c-j/)
2. 配置环境变量
变量名：classpath
变量值：.;[mysql驱动包绝对路径]
如：`.;D:\java\jdbc\mysql-jdbc.jar`
![1]( https://shphuang_aliyun.gitee.io/jdbc/1.png)
3. JDBC编程六步
    1. 注册驱动（作用：告诉java程序即将连接的是哪个品牌的数据库）
    2. 获取连接（表示JVM的进程和数据库的进程之间的通道打开了，则属于进程之间的通信，重量级的，使用完一定要关闭）
    3. 获取数据库操作对象（专门执行sql语句的对象）
    4. 执行SQL语句（DQL，DML····）
    5. 处理查询结果集（只有当第四步执行的是 DQL语句 的时候，才有处理查询结果集。）
    6. 释放资源（使用完资源一定要关闭资源。java和数据库属于进程间通信，开启之后一定要关闭）

### 三、JDBC操作
1. 初次测试
    ```java
    import com.mysql.jdbc.Driver;
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    import java.sql.Statement;

    public class JDBCTest01 {
        //数据库连接地址，基本上：jdbc:mysql://[理解的数据库物理地址]:[端口号]/[数据库名称]
        private static final String url = "jdbc:mysql://localhost:3306/emp_db";
        //数据库的用户名
        private static final String user = "root";
        //数据库的密码
        private static final String password = "333";

        //数据库连接对象conn
        private static Connection conn = null;

        //数据库操作对象
        private static Statement sql = null;

        public static void main(String[] args) throws SQLException {
            try{
                //1. 注册驱动
                Driver driver = new Driver();//获取驱动对象
                DriverManager.registerDriver(driver);

                //2. 获取连接
                conn = DriverManager.getConnection(url, user,password );
                System.out.println("连接成功："+conn);

                //3. 获取数据库操作对象sql
                sql = conn.createStatement();

                //4. 执行sql语句的DML语句
                String str = "insert into salgrade values (6,10000,20000)";
                int ret = sql.executeUpdate(str);//返回值为 1，代表成功执行插入一条语句
                
                System.out.println(ret);

            }catch (Exception ex){
                ex.printStackTrace();
            }finally {
                //释放资源
                sql.close();
                conn.close();
            }
        }
    }

    ```
2. 注册驱动的常用方法(采用类加载注册驱动)
    ```java
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    import java.sql.Statement;

    public class JDBCTest02 {
        //注册启动的常用写法

        public static void main(String[] args) throws SQLException {
            Connection conn = null;
            Statement optDB = null;

            try {
                //1. 注册驱动
                /*//方法一：
                DriverManager.registerDriver(new com.mysql.jdbc.Driver());*/

                /*
                * 方法二：
                * 采用类加载模式注册驱动（常用方法）
                * 类加载传递的是字符串，因此我们可以把字符串写入xxx.properties文件中
                * */
                Class.forName("com.mysql.jdbc.Driver");

                //2. 连接数据库
                String url = "jdbc:mysql://localhost:3306/emp_db";
                String user = "root";
                String password = "333";
                conn = DriverManager.getConnection(url, user, password);

                //3. 获取sql对象
                optDB = conn.createStatement();

                //4. 执行sql语句
                String sql = "update salgrade set hisal=15000 where grade=6";
                int i = optDB.executeUpdate(sql);
                
                System.out.printf(i == 1 ?"执行成功！":"执行失败！");

            }catch (Exception e){
                e.printStackTrace();
            }finally {
                //5. 释放资源
                optDB.close();
                conn.close();
            }
        }

    }

    ```

3. 使用类加载方式联合xxx.properties文件注册驱动
    ```java
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    import java.sql.Statement;
    import java.util.ResourceBundle;

    public class JDBCTest03 {
        //注册启动的常用写法

        public static void main(String[] args) throws SQLException {
            //获取jdbc.properties
            ResourceBundle bundle = ResourceBundle.getBundle("jdbc");
            String driver = bundle.getString("driver");
            String url = bundle.getString("url");
            String user = bundle.getString("user");
            String password = bundle.getString("password");

            Connection conn = null;
            Statement optDB = null;

            try {
                //1. 注册驱动
            /*
                * 采用类加载模式注册驱动（常用方法）
                * 类加载传递的是字符串，因此我们可以把字符串写入xxx.properties文件中
                * */
                Class.forName(driver);

                //2. 连接数据库
                conn = DriverManager.getConnection(url, user, password);

                //3. 获取sql对象
                optDB = conn.createStatement();

                //4. 执行sql语句
                String sql = "update salgrade set hisal=20000 where grade=6";
                int i = optDB.executeUpdate(sql);

                System.out.printf(i == 1 ?"执行成功！":"执行失败！");

            }catch (Exception e){
                e.printStackTrace();
            }finally {
                //5. 释放资源
                optDB.close();
                conn.close();
            }
        }
    }
    ```

    ```json
    jdbc.properties

    driver=com.mysql.jdbc.Driver
    url=jdbc:mysql://localhost:3306/emp_db
    user=root
    password=333
    ```

4. 遍历结果集
    ```java
    import java.sql.*;
    import java.util.ResourceBundle;

    public class JDBCTest04 {
        /*
        * 处理查询结果集
        * */

        public static void main(String[] args) throws SQLException {
            ResourceBundle bundle = ResourceBundle.getBundle("jdbc");
            String driver = bundle.getString("driver");
            String url = bundle.getString("url");
            String user = bundle.getString("user");
            String password = bundle.getString("password");

            Connection conn = null;
            Statement optDB = null;
            ResultSet rs = null;

            try{
                //1. 注册驱动
                Class.forName(driver);

                //2. 连接数据库
                conn = DriverManager.getConnection(url, user, password);

                //3. 获取sql语句操作对象
                optDB = conn.createStatement();

                //4. 执行sql语句
                String sql = "select empno,ename,job,sal from emp";
                rs = optDB.executeQuery(sql);//专门用于数据库的查询

                //5. 处理结果集
                while (rs.next()){
                    String empno = rs.getString("empno");
                    String ename = rs.getString("ename");
                    String job = rs.getString("job");
                    String sal = rs.getString("sal");
                    System.out.println("| empno = "+empno+"| ename = "+ename+"| job = "+job+"| sal = "+sal+" |" );
                }

            }catch (Exception e){
                e.printStackTrace();
            }finally {
                //6. 释放资源
                if (rs != null || optDB != null || conn != null){
                    rs.close();
                    optDB.close();
                    conn.close();
                }
            }
        }
    }
    ```

5. 采用预编译sql语句的对象解决sql语句注入问题
    ```java

    import java.sql.*;
    import java.util.ResourceBundle;
    import java.util.Scanner;

    public class JDBCTest05 {
        /*
        * 处理查询结果集
        * */

        public static void main(String[] args) throws SQLException {
            Scanner scan = new Scanner(System.in);
            System.out.println("你要查询到员工薪水不大于多少？");
            float val = scan.nextFloat();


            ResourceBundle bundle = ResourceBundle.getBundle("jdbc");
            String driver = bundle.getString("driver");
            String url = bundle.getString("url");
            String user = bundle.getString("user");
            String password = bundle.getString("password");

            Connection conn = null;
            PreparedStatement optDB = null;
            ResultSet rs = null;

            try{
                //1. 注册驱动
                Class.forName(driver);

                //2. 连接数据库
                conn = DriverManager.getConnection(url, user, password);

                //3. 获取预编译的sql操作对象
                //这是一个sql语句框，'?'表示一个占位符，一个'?'接收一个值，注意占位符不能用''括起来
                String sql = "select empno,ename,job,sal from emp where sal>?";
                //预编译sql语句
                optDB = conn.prepareStatement(sql);

                //4. 执行sql语句
                //给sql语句框的占位符传值
                optDB.setFloat(1,val);
                rs = optDB.executeQuery();//专门用于数据库的查询

                //5. 处理结果集
                while (rs.next()){
                    String empno = rs.getString("empno");
                    String ename = rs.getString("ename");
                    String job = rs.getString("job");
                    String sal = rs.getString("sal");
                    System.out.println("| empno = "+empno+"| ename = "+ename+"| job = "+job+"| sal = "+sal+" |" );
                }

            }catch (Exception e){
                e.printStackTrace();
            }finally {
                //6. 释放资源
                if (rs != null || optDB != null || conn != null){
                    rs.close();
                    optDB.close();
                    conn.close();
                }
            }
        }
    }
    ```
### 四、 Statement 和 PreparedStatement 对比
1. Statement存在sql语句注入，PreparedStatement不存在
2. Statement是编译一次执行一次，PreparedStatement编译一次，执行n次，效率较高
3. PreparedStatement会在编译阶段做类型的安全检查
4. 在大多数情况会使用PreparedStatement，少部分情况会使用Statement（如要求由sql语句注入的需求）

### 五、JDBC事务
    ```java
    conn.setAutoCommit(false);//关闭事务自动提交
    conn.commit();//当要执行的sql语句全部执行，事务提交（一般放在末尾）
    conn.rollback();//当sql语句执行异常，事务回滚（一般放在catch语句块）

    ```