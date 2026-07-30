# 钱来多网站部署指南

## 一、域名注册（你操作，5分钟）

### 推荐：阿里云万网
1. 打开 https://wanwang.aliyun.com
2. 搜索域名：`qianlaiduo`
3. 选择 `.com` 后缀（约55-69元/年）
4. 点击"加入清单" → "去结算"
5. 登录/注册阿里云账号
6. 完成实名认证（身份证+手机验证）
7. 支付（支付宝/微信）

### 备选：腾讯云
1. 打开 https://cloud.tencent.com
2. 搜索域名：`qianlaiduo`
3. 选择 `.com` 或 `.cn`
4. 按提示完成注册和付款

---

## 二、网站部署到 Vercel（免费，3分钟）

### 步骤 1：注册 Vercel
1. 打开 https://vercel.com
2. 点击 "Sign Up"
3. 选择 "Continue with GitHub"（推荐）
4. 授权登录

### 步骤 2：导入项目
1. 点击 "Add New Project"
2. 选择 "Import Git Repository"
3. 选择你的代码仓库（如果没有，先上传到 GitHub）
4. 点击 "Deploy"

### 步骤 3：绑定域名
1. 部署完成后，进入项目设置
2. 点击 "Domains" → "Add"
3. 输入：`qianlaiduo.com`
4. 点击 "Add"
5. 系统会提示你配置 DNS

### 步骤 4：配置 DNS
在阿里云/腾讯云域名管理后台，添加以下记录：

```
记录类型    主机记录    记录值                    TTL
A          @          76.76.21.21              600
CNAME      www        cname.vercel-dns.com     600
```

> 注：Vercel 会提供具体的 IP 和 CNAME 值，按提示填写即可

### 步骤 5：等待生效
- DNS 生效需要 5-30 分钟
- 生效后访问 https://qianlaiduo.com 即可看到网站
- SSL 证书自动配置，无需手动操作

---

## 三、备选方案：Netlify

如果 Vercel 有问题，可以用 Netlify：
1. 打开 https://www.netlify.com
2. 注册账号
3. 拖拽上传构建后的文件（`pnpm build` 后的 `out` 目录）
4. 绑定域名：`qianlaiduo.com`
5. 配置 DNS（类似 Vercel）

---

## 四、域名备案（国内访问必须）

如果你的服务器在国内，需要备案：
1. 在阿里云/腾讯云提交备案申请
2. 提供身份证、手机号、网站截图
3. 等待管局审核（约 7-20 个工作日）
4. 备案通过后才能正常访问

**免备案方案**：
- 使用 Vercel/Netlify（服务器在海外）
- 国内访问速度可能稍慢，但无需备案

---

## 五、企业邮箱（可选）

如果需要 `contact@qianlaiduo.com` 邮箱：
1. 阿里云企业邮箱：https://qiye.aliyun.com（约 150元/年/5账号）
2. 腾讯企业邮箱：https://exmail.qq.com（免费版可用）
3. 配置 MX 记录指向邮箱服务器

---

## 六、费用清单

| 项目 | 费用 | 说明 |
|------|------|------|
| 域名注册 | 55-69元/年 | .com 域名 |
| Vercel 部署 | 免费 | 个人版免费 |
| SSL 证书 | 免费 | Let's Encrypt |
| 企业邮箱 | 0-150元/年 | 可选 |
| **总计** | **55-219元/年** | |

---

## 七、后续维护

- 域名续费：每年到期前续费
- 网站更新：修改代码后推送到 GitHub，Vercel 自动部署
- 监控：Vercel 提供免费访问统计

---

## 需要帮助？

如果在操作过程中遇到问题，随时告诉我，我会提供详细指导。
