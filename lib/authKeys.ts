import { supabase } from "./supabase"

// 预设的身份ID密钥列表
export const AUTH_KEYS = [
  "ZHUJIAN-A1B2C-2025A-P5NQ",
  "ZHUJIAN-D3E4F-2025B-L8VT",
  "ZHUJIAN-G5H6I-2025C-J3MD",
  "ZHUJIAN-K7L8M-2025D-W7HX",
  "ZHUJIAN-N9P0Q-2025E-G2BZ",
  "ZHUJIAN-R1S2T-2025F-S9KC",
  "ZHUJIAN-U3V4W-2025G-R4WY",
  "ZHUJIAN-X5Y6Z-2025H-T5NM",
  "ZHUJIAN-B7C8D-2025I-D8VQ",
  "ZHUJIAN-E9F0G-2025J-F6HP",
  "ZHUJIAN-H1I2J-2025K-M4N5",
  "ZHUJIAN-K3L4M-2025L-Q8R9",
  "ZHUJIAN-N5P6Q-2025M-T2U3",
  "ZHUJIAN-R7S8T-2025N-W6X7",
  "ZHUJIAN-U9V0W-2025O-Z0A1",
  "ZHUJIAN-X1Y2Z-2025P-C4D5",
  "ZHUJIAN-A3B4C-2025Q-F8G9",
  "ZHUJIAN-D5E6F-2025R-J2K3",
  "ZHUJIAN-G7H8I-2025S-M6N7",
  "ZHUJIAN-J9K0L-2025T-P0Q1",
  "ZHUJIAN-M1N2O-2025U-S4T5",
  "ZHUJIAN-P3Q4R-2025V-V8W9",
  "ZHUJIAN-S5T6U-2025W-Y2Z3",
  "ZHUJIAN-V7W8X-2025X-B6C7",
  "ZHUJIAN-Y9Z0A-2025Y-E0F1",
  "ZHUJIAN-B1C2D-2025Z-H4I5",
  "ZHUJIAN-E3F4G-2025A-K8L9",
  "ZHUJIAN-H5I6J-2025B-N2O3",
  "ZHUJIAN-K7L8M-2025C-Q6R7",
  "ZHUJIAN-N9O0P-2025D-T0U1",
  "ZHUJIAN-Q1R2S-2025E-W4X5",
  "ZHUJIAN-T3U4V-2025F-Z8A9",
  "ZHUJIAN-W5X6Y-2025G-C2D3",
  "ZHUJIAN-Z7A8B-2025H-F6G7",
  "ZHUJIAN-C9D0E-2025I-J0K1",
  "ZHUJIAN-F1G2H-2025J-M4N5",
  "ZHUJIAN-I3J4K-2025K-P8Q9",
  "ZHUJIAN-L5M6N-2025L-S2T3",
  "ZHUJIAN-O7P8Q-2025M-V6W7",
  "ZHUJIAN-R9S0T-2025N-Y0Z1",
  "ZHUJIAN-U1V2W-2025O-B4C5",
  "ZHUJIAN-X3Y4Z-2025P-E8F9",
  "ZHUJIAN-A5B6C-2025Q-H2I3",
  "ZHUJIAN-D7E8F-2025R-K6L7",
  "ZHUJIAN-G9H0I-2025S-N0O1",
  "ZHUJIAN-J1K2L-2025T-Q4R5",
  "ZHUJIAN-M3N4O-2025U-T8U9",
  "ZHUJIAN-P5Q6R-2025V-W2X3",
  "ZHUJIAN-S7T8U-2025W-Z6A7",
  "ZHUJIAN-V9W0X-2025X-C0D1",
  "ZHUJIAN-Y1Z2A-2025Y-F4G5",
  "ZHUJIAN-B3C4D-2025Z-H8I9",
  "ZHUJIAN-E5F6G-2025A-K2L3",
  "ZHUJIAN-H7I8J-2025B-N6O7",
  "ZHUJIAN-K9L0M-2025C-Q0R1",
  "ZHUJIAN-N1O2P-2025D-T4U5",
  "ZHUJIAN-Q3R4S-2025E-W8X9",
  "ZHUJIAN-T5U6V-2025F-Z2A3",
  "ZHUJIAN-W7X8Y-2025G-C6D7",
  "ZHUJIAN-Z9A0B-2025H-F0G1",
  "ZHUJIAN-C1D2E-2025I-H4I5",
  "ZHUJIAN-F3G4H-2025J-K8L9",
  "ZHUJIAN-I5J6K-2025K-N2O3",
  "ZHUJIAN-L7M8N-2025L-Q6R7",
  "ZHUJIAN-O9P0Q-2025M-T0U1",
  "ZHUJIAN-R1S2T-2025N-W4X5",
  "ZHUJIAN-U3V4W-2025O-Z8A9",
  "ZHUJIAN-X5Y6Z-2025P-C2D3",
  "ZHUJIAN-A7B8C-2025Q-F6G7",
  "ZHUJIAN-D9E0F-2025R-J0K1",
  "ZHUJIAN-G1H2I-2025S-M4N5",
  "ZHUJIAN-J3K4L-2025T-P8Q9",
  "ZHUJIAN-M5N6O-2025U-S2T3",
  "ZHUJIAN-P7Q8R-2025V-V6W7",
  "ZHUJIAN-S9T0U-2025W-Y0Z1",
  "ZHUJIAN-V1W2X-2025X-B4C5",
  "ZHUJIAN-Y3Z4A-2025Y-E8F9",
  "ZHUJIAN-B5C6D-2025Z-H2I3",
  "ZHUJIAN-E7F8G-2025A-K6L7",
  "ZHUJIAN-H9I0J-2025B-N0O1",
  "ZHUJIAN-K1L2M-2025C-Q4R5",
  "ZHUJIAN-N3O4P-2025D-T8U9",
  "ZHUJIAN-Q5R6S-2025E-W2X3",
  "ZHUJIAN-T7U8V-2025F-Z6A7",
  "ZHUJIAN-W9X0Y-2025G-C0D1",
  "ZHUJIAN-Z1A2B-2025H-F4G5",
  "ZHUJIAN-C3D4E-2025I-H8I9",
  "ZHUJIAN-F5G6H-2025J-K2L3",
  "ZHUJIAN-I7J8K-2025K-N6O7",
  "ZHUJIAN-L9M0N-2025L-Q0R1",
  "ZHUJIAN-O1P2Q-2025M-T4U5",
  "ZHUJIAN-R3S4T-2025N-W8X9",
  "ZHUJIAN-U5V6W-2025O-Z2A3",
  "ZHUJIAN-X7Y8Z-2025P-C6D7",
  "ZHUJIAN-A9B0C-2025Q-F0G1",
  "ZHUJIAN-D1E2F-2025R-H4I5",
  "ZHUJIAN-G3H4I-2025S-K8L9",
  "ZHUJIAN-J5K6L-2025T-N2O3",
  "ZHUJIAN-M7N8O-2025U-Q6R7",
  "ZHUJIAN-P9Q0R-2025V-T0U1",
  "ZHUJIAN-S1T2U-2025W-W4X5",
  "ZHUJIAN-V3W4X-2025X-Z8A9",
  "ZHUJIAN-Y5Z6A-2025Y-C2D3",
  "ZHUJIAN-B7C8D-2025Z-F6G7",
  "ZHUJIAN-E9F0G-2025A-H0I1",
  "ZHUJIAN-H1I2J-2025B-K4L5",
  "ZHUJIAN-K3L4M-2025C-N8O9",
  "ZHUJIAN-N5P6Q-2025D-Q2R3",
  "ZHUJIAN-Q7R8S-2025E-T6U7",
  "ZHUJIAN-T9U0V-2025F-W0X1",
  "ZHUJIAN-W1X2Y-2025G-Z4A5",
  "ZHUJIAN-Z3A4B-2025H-C8D9",
  "ZHUJIAN-C5D6E-2025I-F2G3",
  "ZHUJIAN-F7G8H-2025J-I6J7",
  "ZHUJIAN-I9J0K-2025K-L0M1",
  "ZHUJIAN-L1M2N-2025L-O4P5",
  "ZHUJIAN-O3P4Q-2025M-R8S9",
  "ZHUJIAN-R5S6T-2025N-U2V3",
  "ZHUJIAN-U7V8W-2025O-X6Y7",
  "ZHUJIAN-X9Y0Z-2025P-A0B1",
  "ZHUJIAN-A1B2C-2025Q-D4E5",
  "ZHUJIAN-D3E4F-2025R-G8H9",
  "ZHUJIAN-G5H6I-2025S-J2K3",
  "ZHUJIAN-J7K8L-2025T-M6N7",
  "ZHUJIAN-M9N0O-2025U-P0Q1",
  "ZHUJIAN-P1Q2R-2025V-S4T5",
  "ZHUJIAN-S3T4U-2025W-V8W9",
  "ZHUJIAN-V5W6X-2025X-Y2Z3",
  "ZHUJIAN-Y7Z8A-2025Y-B6C7",
  "ZHUJIAN-B9C0D-2025Z-E0F1",
  "ZHUJIAN-E1F2G-2025A-H4I5",
  "ZHUJIAN-H3I4J-2025B-K8L9",
  "ZHUJIAN-K5L6M-2025C-N2O3",
  "ZHUJIAN-N7O8P-2025D-Q6R7",
  "ZHUJIAN-Q9R0S-2025E-T0U1",
  "ZHUJIAN-T1U2V-2025F-W4X5",
  "ZHUJIAN-W3X4Y-2025G-Z8A9",
  "ZHUJIAN-Z5A6B-2025H-C2D3",
  "ZHUJIAN-C7D8E-2025I-F6G7",
  "ZHUJIAN-F9G0H-2025J-I0J1",
  "ZHUJIAN-I1J2K-2025K-L4M5",
  "ZHUJIAN-L3M4N-2025L-O8P9",
  "ZHUJIAN-O5P6Q-2025M-R2S3",
  "ZHUJIAN-R7S8T-2025N-U6V7",
  "ZHUJIAN-U9V0W-2025O-X0Y1",
  "ZHUJIAN-X1Y2Z-2025P-A4B5",
  "ZHUJIAN-A3B4C-2025Q-D8E9",
  "ZHUJIAN-D5E6F-2025R-G2H3",
  "ZHUJIAN-G7H8I-2025S-J6K7",
  "ZHUJIAN-J9K0L-2025T-M0N1",
  "ZHUJIAN-M1N2O-2025U-P4Q5",
  "ZHUJIAN-P3Q4R-2025V-S8T9",
  "ZHUJIAN-S5T6U-2025W-V2W3",
  "ZHUJIAN-V7W8X-2025X-Y6Z7",
  "ZHUJIAN-Y9Z0A-2025Y-B0C1",
  "ZHUJIAN-B1C2D-2025Z-E4F5",
  "ZHUJIAN-E3F4G-2025A-H8I9",
  "ZHUJIAN-H5I6J-2025B-K2L3",
  "ZHUJIAN-K7L8M-2025C-N6O7",
  "ZHUJIAN-N9O0P-2025D-Q0R1",
  "ZHUJIAN-Q1R2S-2025E-T4U5",
  "ZHUJIAN-T3U4V-2025F-W8X9",
  "ZHUJIAN-W5X6Y-2025G-Z2A3",
  "ZHUJIAN-Z7A8B-2025H-C6D7",
  "ZHUJIAN-C9D0E-2025I-F0G1",
  "ZHUJIAN-F1G2H-2025J-I4J5",
  "ZHUJIAN-I3J4K-2025K-L8M9",
  "ZHUJIAN-L5M6N-2025L-O2P3",
  "ZHUJIAN-O7P8Q-2025M-R6S7",
  "ZHUJIAN-R9S0T-2025N-U0V1",
  "ZHUJIAN-U1V2W-2025O-X4Y5",
  "ZHUJIAN-X3Y4Z-2025P-A8B9",
  "ZHUJIAN-A5B6C-2025Q-D2E3",
  "ZHUJIAN-D7E8F-2025R-G6H7",
  "ZHUJIAN-G9H0I-2025S-J0K1",
  "ZHUJIAN-J1K2L-2025T-M4N5",
  "ZHUJIAN-M3N4O-2025U-P8Q9",
  "ZHUJIAN-P5Q6R-2025V-S2T3",
  "ZHUJIAN-S7T8U-2025W-V6W7",
  "ZHUJIAN-V9W0X-2025X-Y0Z1",
  "ZHUJIAN-Y1Z2A-2025Y-B4C5",
  "ZHUJIAN-B3C4D-2025Z-E8F9",
  "ZHUJIAN-E5F6G-2025A-H2I3",
  "ZHUJIAN-H7I8J-2025B-K6L7",
  "ZHUJIAN-K9L0M-2025C-N0O1",
  "ZHUJIAN-N1O2P-2025D-Q4R5",
  "ZHUJIAN-Q3R4S-2025E-T8U9",
  "ZHUJIAN-T5U6V-2025F-W2X3",
  "ZHUJIAN-W7X8Y-2025G-Z6A7",
  "ZHUJIAN-Z9A0B-2025H-C0D1",
  "ZHUJIAN-C1D2E-2025I-F4G5",
  "ZHUJIAN-F3G4H-2025J-I8J9",
  "ZHUJIAN-I5J6K-2025K-L2M3",
  "ZHUJIAN-L7M8N-2025L-O6P7",
  "ZHUJIAN-O9P0Q-2025M-R0S1",
  "ZHUJIAN-R1S2T-2025N-U4V5",
  "ZHUJIAN-U3V4W-2025O-X8Y9",
  "ZHUJIAN-X5Y6Z-2025P-A2B3",
  "ZHUJIAN-A7B8C-2025Q-D6E7",
  "ZHUJIAN-D9E0F-2025R-G0H1",
  "ZHUJIAN-G1H2I-2025S-J4K5",
  "ZHUJIAN-J3K4L-2025T-M8N9",
  "ZHUJIAN-M5N6O-2025U-P2Q3",
  "ZHUJIAN-P7Q8R-2025V-S6T7",
  "ZHUJIAN-S9T0U-2025W-V0W1",
  "ZHUJIAN-V1W2X-2025X-Y4Z5",
  "ZHUJIAN-Y3Z4A-2025Y-B8C9",
  "ZHUJIAN-B5C6D-2025Z-E2F3"
]

// 存储已使用的密钥
const USED_KEYS_STORAGE_KEY = "zhujian_used_auth_keys"

// 清除所有已使用的密钥
export function clearUsedKeys(): void {
  localStorage.removeItem(USED_KEYS_STORAGE_KEY)
}

// 获取已使用的密钥列表
function getUsedKeys(): string[] {
  const usedKeysStr = localStorage.getItem(USED_KEYS_STORAGE_KEY)
  return usedKeysStr ? JSON.parse(usedKeysStr) : []
}

// 标记密钥为已使用
export function markKeyAsUsed(key: string): void {
  const usedKeys = getUsedKeys()
  if (!usedKeys.includes(key)) {
    usedKeys.push(key)
    localStorage.setItem(USED_KEYS_STORAGE_KEY, JSON.stringify(usedKeys))
  }
}

// 检查密钥格式是否正确
function validateKeyFormat(key: string): boolean {
  const pattern = /^ZHUJIAN-[A-Z0-9]{5}-20(25|26|27)[A-Z]-[A-Z0-9]{4}$/
  return pattern.test(key)
}

// 检查密钥是否已被使用
async function isKeyUsed(key: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('order_confirmations')
      .select('id')
      .eq('identity_key', key)
      .maybeSingle()

    if (error) {
      console.error('Error checking key usage:', error)
      return false
    }

    console.log('Database check result:', { data, key })
    return !!data
  } catch (error) {
    console.error('Error in isKeyUsed:', error)
    return false
  }
}

// 验证密钥是否有效
export async function validateAuthKey(key: string): Promise<{ isValid: boolean; isUsed: boolean }> {
  const formattedKey = key.trim().toUpperCase()
  
  // 检查密钥格式和是否在预设列表中
  if (!validateKeyFormat(formattedKey) || !AUTH_KEYS.includes(formattedKey)) {
    return { isValid: false, isUsed: false }
  }

  // 检查密钥是否已被使用
  const used = await isKeyUsed(formattedKey)
  
  return { 
    isValid: true,
    isUsed: used
  }
} 