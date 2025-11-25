/**
 * Mock API 占位符
 * 用于解决类型检查问题
 */

export interface MapData {
  lng: number;
  lat: number;
  driver?: string;
  plateNumber?: string;
  orientation?: number;
}

export function mapJson(): Promise<{ data: MapData[] }> {
  // 返回模拟数据
  return Promise.resolve({ data: [] });
}
