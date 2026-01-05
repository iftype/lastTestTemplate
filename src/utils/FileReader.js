import fs from 'node:fs';
import path from 'node:path';

export function readCSV(fileName) {
  try {
    const filePath = path.join(process.cwd(), 'src/resources', fileName);
    console.log(filePath);
    const data = fs.readFileSync(filePath, 'utf-8');

    const lines = data
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line !== '');

    lines.shift();

    return lines.map((line) => {
      const [nickname, timestamp] = line.split(',');
      return { nickname, timestamp };
    });
  } catch (error) {
    // 4. 우테코 요구사항: 에러는 [ERROR]로 시작하는 메시지를 던져야 함
    throw new Error('[ERROR] 파일을 읽을 수 없습니다.');
  }
}
