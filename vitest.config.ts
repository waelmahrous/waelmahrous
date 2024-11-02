import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        coverage: {
            include: ['src/components/**.{ts,tsx}'],
            reporter: ['text'],
            thresholds: {
                global: {
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    statements: 80,
                },
            }
        },
    },
})