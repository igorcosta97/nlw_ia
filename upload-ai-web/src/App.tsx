import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Slider } from './components/ui/slider'

export function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='px-6 py-3 flex items-center justify-between border-b'>
        <h1 className='text-xl font-bold'>upload.ai</h1>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground'>Desenvolvido por Igor Silva👨🏽‍💻🚀</span>
          <Separator orientation='vertical' className='h-6'/>
          <Button variant='secondary'>
            <Github className='2-4 h-4 mr-2'/>
            Github
          </Button>
        </div>
      </div>
      <main className='flex-1 p-6 flex gap-6'>
        <div className=' flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-2 flex-1'>
            <Textarea 
              placeholder='Inclua o prompt para IA...' 
              className='resize-none p-4 leading-relaxed'
            />
            <Textarea
              placeholder='Resultado gerado pela IA...' 
              readOnly
              className='resize-none p-4 leading-relaxed'
            />
          </div>
          <p className='text-muted-foreground text-sm'>
            Lembre-se: Você pode utilizar a variável <code className='text-violet-400'>{'{transcription}'}</code> no seu promp para adicionar o conteudo da transcrição do video selecionado!
          </p>
        </div>
        <aside className='w-1/4 space-y-6'>
          <form className='space-y-6'>
            <label htmlFor='video' className='border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10'>
              <FileVideo className='h-12 w-12'/>
              Selecione um vídeo
            </label>
            <input type='file' id='video' accept='video/mp4' className='sr-only'></input>
            <Separator/>
            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea id='transcription_prompt' className='h-24 resize-none leading-relaxed' placeholder='Inclua palavras-chave mencionadas no video separadas por virgula (,)'/>
            </div>
            <Button type='submit' className='w-full'>
              Carregar Vídeo
              <Upload className='h-4 w-4 ml-2'/>
            </Button>
          </form>
          <Separator/>
          <form className='space-y-6'>
          <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>
                    Título do youtube
                  </SelectItem>
                  <SelectItem value='description'>
                    Descrição do youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator/>
            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>
                    Gpt 3.5-turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve</span>
            </div>
            <Separator/>
            <div className='space-y-2'>
              <Label>Temperatura</Label>
              <Slider 
                min={0}
                max={1}
                step={0.1}

              />
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>Valores mais altos tendem a deixar o resultado mais criativo, e com possíveis erros</span>
            </div>
            <Separator/>
            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='h-4 w-4 ml-2'/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
