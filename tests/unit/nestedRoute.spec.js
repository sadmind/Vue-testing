import { beforeEach } from '@/router.js'
import mockModule from '@/bust-cache.js'
import NestedRoute from '@/components/NestedRoute.vue'

jest.mock("@/bust-cache.js", () => ({ bustCache: jest.fn() }))

describe('beforeEach', () => {
    afterEach(() => {
        mockModule.bustCache.mockClear()
    })

    it('busts the cache when going to /user (shouldBustCahe: true)', () => {
        const to = {
            matched: [{ meta: {shouldBustCache: true}}]
        }
        const next = jest.fn()

        beforeEach(to, undefined, next)

        expect(mockModule.bustCache).toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
    });

    it('busts the cache when going to /user (shouldBustCahe: false)', () => {
        const to = {
            matched: [{ meta: {shouldBustCache: false}}]
        }
        const next = jest.fn()

        beforeEach(to, undefined, next)

        expect(mockModule.bustCache).not.toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
    });

    it('calls bustCache and next when leaving the route', () => {
        const next = jest.fn()
        NestedRoute.beforeRouteLeave(undefined, undefined, next)

        expect(mockModule.bustCache).toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
    });
});