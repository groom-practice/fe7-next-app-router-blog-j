# 🚀 Next.js App Router 기반 블로그 프로젝트

구름 FE 7기 실습 과정으로 제작된 **Next.js 블로그 스타터** 프로젝트입니다.  
App Router 구조를 활용하여 CRUD 기능 및 검색, 카테고리 필터링을 구현했습니다.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: URL Query Parameters (searchParams)
- **API**: Next.js Route Handlers

## ✨ 주요 기능

- **게시글 CRUD**: 게시글 작성, 조회, 수정, 삭제 기능 (메모리 데이터 기반)
- **검색 기능**: 제목 및 내용 키워드 검색 (**Debouncing** 적용으로 성능 최적화)
- **카테고리 필터링**: 카테고리별 게시글 분류 기능
- **다이나믹 라우팅**: `[id]` 경로를 활용한 상세 페이지 구현
- **로딩 및 에러 처리**: `loading.js`와 `not-found.js`를 활용한 UX 개선

## 📂 프로젝트 구조

```text
app/
├── api/             # API Route Handlers (GET, POST, PUT, DELETE)
├── components/      # 재사용 가능한 UI 컴포넌트 (Form, List, Filter 등)
├── posts/
│   └── [id]/        # 상세 페이지 및 수정 페이지
├── write/           # 글 작성 페이지
├── layout.js        # 공통 레이아웃 (Header 포함)
└── page.js          # 메인 페이지 (검색 및 필터링 로직)
```
